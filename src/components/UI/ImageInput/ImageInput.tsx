import { FC, useCallback, useState } from 'react'
import avatar from '../../../img/user-profile-photo.jpg'
import './ImageInput.scss'

export const ImageInput: FC = () => {
  const [file, setFile] = useState<any>(avatar)

  const handleFiles = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader()
      reader.readAsDataURL(event.currentTarget.files![0])
      reader.onloadend = (event: ProgressEvent<FileReader>) => {
        setFile(event.target!.result)
        if (localStorage.getItem('avatar') === 'null') {
          localStorage.setItem('avatar', file)
        }
      }
    },
    [file]
  )

  return (
    <>
      <label className='file__input' htmlFor='avatar'>
        <img src={file} alt='Аватар администратора' />
      </label>
      <input
        type='file'
        alt='Avatar'
        id='avatar'
        name='avatar'
        accept='image/jpg, image/png, image/jpeg, image/svg'
        className='hidden__input'
        onChange={handleFiles}
      />
    </>
  )
}
