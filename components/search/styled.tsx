import styled from '@emotion/styled'
import { Input } from 'antd'

const { Search } = Input

export const SearchCustom = styled(Search)`
  background-color: #121214;
  width: 100%;
  height: 30px;
  border-radius: 17px;
  border-color: transparent !important;
  border-bottom:none !important;

  .ant-input-group-addon{
   display: none;
  }
`