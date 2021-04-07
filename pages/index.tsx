import React from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { DashboardLayout } from '../layout/dashboard'

const { SubMenu } = Menu

class Index extends React.Component {
  handleClick = (e) => {
    console.log('click ', e)
  }

  render() {
    return (
      <DashboardLayout sider={<div>sider</div>} content={<div>content</div>} />
    )
  }
}

export default Index
