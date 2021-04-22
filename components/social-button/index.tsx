import * as React from 'react'
import { Button } from 'antd'
import { LeftContainer } from '../../blocks/registration/styled'

type Props = {
  icon?: any
}
export const Social = (props: Props) => {
  const { icon } = props
  return (
    <Button
      type="primary"
      style={{ backgroundColor: '#000000', border: 'none' }}
      shape="circle"
      icon={icon}
      size="large"
    />
  )
}
