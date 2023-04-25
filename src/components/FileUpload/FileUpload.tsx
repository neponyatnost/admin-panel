import { FC, useEffect, useState } from 'react'
import IFiles from '../../models/IFiles'
import UploadService from '../../services/FileUploadService'
import './FileUpload.scss'

export const ImageUpload: FC = () => {
  const [currentImage, setCurrentImage] = useState<File>()
  const [previewImage, setPreviewImage] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [imageInfo, setImageInfo] = useState<Array<IFiles>>([])

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfo(response.data)
    })
  }, [])

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList
    setCurrentImage(selectedFiles?.[0])
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]))
    setProgress(0)
    setMessage('')
  }

  const upload = (event: React.FormEvent) => {
    event.preventDefault()
    setProgress(0)
    if (!currentImage) return

    UploadService.upload(currentImage, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total))
    })
      .then((response) => {
        setMessage(response.data.message)
        return UploadService.getFiles()
      })
      .then((files) => {
        setImageInfo(files.data)
      })
      .catch((error) => {
        setProgress(0)
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setMessage(error.response.data.message)
        } else {
          setMessage('Не удалось загрузить фотографию')
        }

        setCurrentImage(undefined)
      })
  }

  return (
    <div>
      <div>
        <form method='post' action='' className='upload-form'>
          <label className='upload-label'>
            {previewImage ? '' : 'Выберите файл'}
            <input
              className='input-hidden'
              multiple
              type='file'
              accept='image/*, video/*'
              onChange={selectImage}
            />
            {previewImage && (
              <div>
                <img src={previewImage} alt='Preview' width={80} height={80} />
              </div>
            )}
          </label>
          {currentImage && progress > 0 && (
            <div
              role='progressbar'
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: progress + '%' }}
              className='upload-progress'
            >
              {progress}%
            </div>
          )}
          <button className='button' disabled={!currentImage} onClick={upload}>
            Загрузить
          </button>
        </form>
      </div>
      {message && (
        <div className='error-message' role='alert'>
          {message}
        </div>
      )}
      {imageInfo.length > 0 && (
        <div>
          <div>Images</div>
          <ul>
            {imageInfo.map((img, index) => (
              <li key={index}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} height={80} width={80} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
