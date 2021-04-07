import * as React from 'react'
import { Registration } from '../blocks/registration'
import { AuthLayout } from '../layout/authentication'

const RegisterPage = () => {
  const _form = <Registration />
  return <AuthLayout form={_form} />
}
export default RegisterPage
