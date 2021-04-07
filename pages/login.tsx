import * as React from 'react'
import { AuthLayout } from '../layout/authentication'
import { Login } from '../blocks/login'

const LoginPage = () => {
  const _form = <Login />
  return <AuthLayout form={_form} />
}
export default LoginPage
