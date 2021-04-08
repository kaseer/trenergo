import * as React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { SearchCustom } from './styled'

type Props = {
  placeholder?:string
};
export const Search = (props: Props) => {
  return <SearchCustom {...props} prefix={<SearchOutlined/>}/>
}