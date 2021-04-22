// @flow
import * as React from 'react'
import { Button } from 'antd'
import styled from '@emotion/styled'
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph'


type Props = {
  onClick: any
};
export const AddWorkout = (props: Props) => {
  return (
  <ButtonWorkoutContainer>
    <ButtonWorkout onClick={props.onClick} icon={<img src="/icons/add-workout.svg" alt="workout"/>}>
      add workout
    </ButtonWorkout>
  <Writing>
    <Title level={2}>
      OR
    </Title>
    <Paragraph>
      select a workout from the library <br/>
      and <b>drag & drop</b> it here
    </Paragraph>
  </Writing>
  </ButtonWorkoutContainer>
  )
}
const Writing = styled.div`
  margin-top: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonWorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonWorkout = styled(Button)`
  border: none;
  width: 162px;
  height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #000000;
  span{
  height: 21px;
  margin: 24px 0 0;
  font-weight: bold;
  color: #3cff8f;
  }
`