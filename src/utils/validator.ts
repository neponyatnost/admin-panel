import { IDataProps } from '../components/UI/LoginForm/LoginForm'

export function validator(data: IDataProps, config: any) {
  const errors: any = {}
  function validate(validateMethod: string, data: any, config: any) {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') return config.message
        break

      case 'isLogin':
        const loginRegExp = /^[a-z0-9_-]{3,16}$/g
        if (!loginRegExp.test(data)) {
          return config.message
        }
        break

      case 'isPassword':
        const passwordRegExp = /^[a-z0-9_-]{6,18}$/
        if (!passwordRegExp.test(data)) {
          return config.message
        }
        break

      default:
        break
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error: string = validate(
        validateMethod,
        data[fieldName as keyof IDataProps],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
