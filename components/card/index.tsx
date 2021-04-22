// @flow
import * as React from 'react'
import { CustomCard } from './styled'
import Meta from 'antd/lib/card/Meta'

type Props = {
  item: any
}
export const Card = (props: Props) => {
  return (
    <CustomCard
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta description={props.item.content} />
    </CustomCard>
  )
}
