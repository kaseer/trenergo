// @flow
import * as React from 'react'
import { Layout } from 'antd'
import { Sidebar } from './sider'
import { DashboardContainer, MainContainer, SideContainer } from './styled'

const { Sider, Content } = Layout
type Props = {
  sider?: any
  content?: any
}
export const DashboardLayout = (props: Props) => {
  const { content, sider } = props

  const sidebar = <Sidebar />
  return (
    <DashboardContainer>
      <SideContainer>{sidebar}</SideContainer>
      <MainContainer>{content}</MainContainer>
    </DashboardContainer>
  )
}
