import React from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { DashboardLayout } from '../layout/dashboard'
import { Library } from '../blocks/library'
import styled from '@emotion/styled'

const { SubMenu } = Menu

const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr 338px;
  grid-template-rows: 100vh;
  gap: 24px;
`

class Index extends React.Component {
  handleClick = (e) => {
    console.log('click ', e)
  }
  content = (
    <Container>
      <div>content</div>
      <Library />
    </Container>
  )

  render() {
    return <DashboardLayout sider={<div>sider</div>} content={this.content} />
  }
}

export default Index
