import * as React from 'react'
import { LibraryContainer, LibrarySection, LibraryButtons } from './styled'
import Title from 'antd/lib/typography/Title'
import { Button, Tabs } from 'antd'

const TabPane = Tabs.TabPane
type Props = {}
export const Library = (props: Props) => {
  function callback(key) {
    console.log(key)
  }
  return (
    <LibraryContainer>
      <LibrarySection>
        <Title level={2}>Library</Title>
        <Tabs onChange={callback} centered>
          <TabPane tab="Workouts" key="1">
            Workouts Panel
          </TabPane>
          <TabPane tab="Blocks" key="2">
            Blocks Panel
          </TabPane>
          <TabPane tab="Exercises" key="3">
            Exercises Panel
          </TabPane>
        </Tabs>
      </LibrarySection>
      <LibraryButtons>
        <Button type="primary" shape="round" ghost>Edit Scenes</Button>
        <Button type="link" shape="round">Preview</Button>
        <Button type="primary" shape="round">Begin Workout</Button>
      </LibraryButtons>
    </LibraryContainer>
  )
}
