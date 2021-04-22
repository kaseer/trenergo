import * as React from 'react'
import Icon from '@ant-design/icons'
import {
  LibraryContainer,
  LibrarySection,
  LibraryButtons,
  FilterIcon,
} from './styled'
import Title from 'antd/lib/typography/Title'
import { Button, Row, Tabs, Col } from 'antd'
import { Search } from '../../components/search'
import { Card } from '../../components/card'

const TabPane = Tabs.TabPane
type Props = {items:any}
export const Library = (props: Props) => {
  function callback(key) {
    console.log(key)
  }
  const filter = () => <img src="/icons/filter.svg" />
  return (
    <LibraryContainer>
      <LibrarySection>
        <Title level={2}>Library</Title>
        <Tabs onChange={callback} centered>
          <TabPane tab="Workouts" key="1">
            <Search placeholder="Search Workouts" />
            <FilterIcon>
              <Icon component={filter} />
            </FilterIcon>
            <Row gutter={[12, 12]}>
              {props.items}
            </Row>
          </TabPane>
          <TabPane tab="Blocks" key="2">
            <Search placeholder="Search Blocks" />
            <FilterIcon>
              <Icon component={filter} />
            </FilterIcon>
            Blocks Panel
          </TabPane>
          <TabPane tab="Exercises" key="3">
            <Search placeholder="Search Exercises" />
            <FilterIcon>
              <Icon component={filter} />
            </FilterIcon>
            Exercises Panel
          </TabPane>
        </Tabs>
      </LibrarySection>
      <LibraryButtons>
        <Button type="primary" shape="round" ghost>
          Edit Scenes
        </Button>
        <Button type="link" shape="round">
          Preview
        </Button>
        <Button type="primary" shape="round">
          Begin Workout
        </Button>
      </LibraryButtons>
    </LibraryContainer>
  )
}
