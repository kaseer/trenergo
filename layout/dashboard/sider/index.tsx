// @flow
import * as React from 'react'
import Icon from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { Menu, Button } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'
import {
  BottomContainer,
  ProfileAvatarContainer,
  ProfileContainer,
  SidebarBottom
} from './styled'
import Title from 'antd/lib/typography/Title'

const { SubMenu } = Menu

type Props = {}

export const Sidebar = (props: Props) => {
  const [state, setState] = useState<{ collapsed: boolean }>({
    collapsed: false,
  })
  const myCSS = css`
    background: purple;
  `
  const [selected, setSelected] = useState<any>(1)
  const [update, setUpdate] = useState(null)
  const ref = useRef(null)
  useEffect(() => {
    const media = window.matchMedia(`(max-width: 600px)`)
    media.addEventListener('change', (e) => setUpdate(e))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setState({ collapsed: true })
    } else {
      setState({ collapsed: false })
    }

    return () => media.removeEventListener('change', (e) => setUpdate(e))
  }, [update])

  // if(ref.current){
  //   ref.current.props.children[selected].props = {className:'som new class'}
  // }
  const overview = () => <img src="/icons/overview.svg" />
  const message = () => <img src="/icons/message.svg" />
  const clients = () => <img src="/icons/clients.svg" />
  const dvr = () => <img src="/icons/DVR.svg" />
  const workout = () => <img src="/icons/workout.svg" />
  const legal = () => <img src="/icons/legal.svg" />
  const team = () => <img src="/icons/teams.svg" />
  const addOn = () => <img src="/icons/add-on.svg" />
  const calendar = () => <img src="/icons/calendar.svg" />

  return (
    <>
      <ProfileAvatarContainer>
        {state.collapsed ? (
          <img src="/logo.svg" alt="logo" />
        ) : (
          <img src="/text-logo.svg" alt="logo" />
        )}
      </ProfileAvatarContainer>
      <div>
        <Menu
          ref={ref}
          defaultSelectedKeys={[`${selected}`]}
          mode="inline"
          onSelect={(r) => setSelected(r.key)}
          inlineCollapsed={state.collapsed}
        >
          <Menu.Item key="1" id="item-1" icon={<Icon component={overview} />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" id="item-2" icon={<Icon component={message} />}>
            Messages | 2
          </Menu.Item>
          <Menu.Item key="3" id="item-3" icon={<Icon component={clients} />}>
            Clients
          </Menu.Item>
          <Menu.Item key="4" id="item-4" icon={<Icon component={team} />}>
            Teams
          </Menu.Item>
          <Menu.Item key="5" id="item-5" icon={<Icon component={dvr} />}>
            VOD / DVR
          </Menu.Item>
          <Menu.Item key="6" id="item-6" icon={<Icon component={workout} />}>
            Workout builder
          </Menu.Item>
          <Menu.Item key="7" id="item-7" icon={<Icon component={legal} />}>
            Legal
          </Menu.Item>
          <Menu.Item key="8" id="item-8" icon={<Icon component={addOn} />}>
            Add ons
          </Menu.Item>
          <Menu.Item key="9" id="item-9" icon={<Icon component={calendar} />}>
            Calender
          </Menu.Item>
        </Menu>
      </div>
      <SidebarBottom>
        <div>
          <Menu
            ref={ref}
            defaultSelectedKeys={[`${selected}`]}
            mode="inline"
            onSelect={(r) => setSelected(r.key)}
            inlineCollapsed={state.collapsed}
          >
            <Menu.Item
              key="10"
              id="item-1"
              icon={<Icon component={overview} />}
            >
              settings
            </Menu.Item>
            <Menu.Item key="11" id="item-2" icon={<Icon component={message} />}>
              support
            </Menu.Item>
          </Menu>
        </div>
      <BottomContainer>
        <ProfileContainer>
          <img src="/profile.png" alt="" />
        </ProfileContainer>
        <Title ellipsis={true} level={5}>Benjamin <br/>
          Zax</Title>
      </BottomContainer>
      </SidebarBottom>
    </>
  )
}
