import styled from '@emotion/styled'
import { Card } from 'antd'

export const CustomCard = styled(Card)`
border: none;
width: 100%;
.ant-card-body{
  padding: 12px 0 0;
  border-color: transparent;
}
.ant-card-cover{
  overflow: hidden;
  min-width: 90px;
  height: 106px;
  border-radius: 10px;
  background-color: #d8d8d8;
  img{
    height: 100%;
    width: 100%;
  }
}
.ant-card-meta-description{
  color: #ffffff;
  font-size: 14px;
}
`