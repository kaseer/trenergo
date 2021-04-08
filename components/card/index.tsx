// @flow 
import * as React from 'react'
import { CustomCard } from './styled'
import Meta from 'antd/lib/card/Meta'

type Props = {};
export const Card = (props: Props) => {
  return (
    <CustomCard
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
    >
      <Meta description="Squats with a ball and a placeholder"/>
    </CustomCard>
  )
}