import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../../api'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Button } from '../../UI/Button/Button'
import { TextField } from '../../UI/Form'
import { Loader } from '../../UI/Loader/Loader'
import { Title } from '../../UI/Title/Title'

export interface IEditClientPageProps {
  name: string
  email: string
  username: string
  phone: string
}

export const EditClientPage: FC = () => {
  const { clientId } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<IEditClientPageProps>({
    name: '',
    email: '',
    username: '',
    phone: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (clientId) {
      API.users
        .update(clientId, { ...data })
        .then(() => navigate(`/clients/${clientId}`))
    }
  }

  const handleChange = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [currentTarget.name]: currentTarget.value,
    }))
  }

  useEffect(() => {
    setIsLoading(true)
    if (clientId) {
      API.users.getById(clientId).then(({ ...data }) =>
        setData((prevState) => ({
          ...prevState,
          ...data,
        }))
      )
    }
  }, [clientId])

  useEffect(() => {
    if (data.name) setIsLoading(false)
  }, [data])

  return (
    <>
      {!isLoading ? (
        <div className='statistics'>
          <Breadcrumbs />
          <Title title='Редактировать' classname='title-h2' />
          <div className='statistics__wrapper'>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Имя'
                name='name'
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                label='Электронная почта'
                name='email'
                value={data.email}
                onChange={handleChange}
              />
              <TextField
                label='Имя пользователя'
                name='username'
                value={data.username}
                onChange={handleChange}
              />
              <TextField
                label='Телефон'
                name='phone'
                value={data.phone}
                onChange={handleChange}
              />
              <Button disabled={false} text='Сохранить' />
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}
