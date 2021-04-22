import * as React from 'react'
import { AuthWrapper, LeftContainer, RightContainer } from './styled'

type Props = {
  form?: any
  label?: any
}
export const AuthLayout = (props: Props) => {
  const { form } = props
  return (
    <AuthWrapper>
      <RightContainer>
        <img src="/text-logo.svg" alt="" />
      </RightContainer>
      <LeftContainer>{form}</LeftContainer>
    </AuthWrapper>
  )
}
