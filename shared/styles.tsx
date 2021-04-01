import React from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export const basicStyles = css`
  * {
  }
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #1d2329;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #687079;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #687079;
  }
  body {
    background: #000000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .ant-input:not(.ant-input-password  input){
    border-bottom: solid 1px #1c1c1e !important;
  }
  .ant-input-password{
    border-bottom: solid 1px #1c1c1e !important;
  }
  input.ant-input:focus{
       --antd-wave-shadow-color:none;
  }
  .ant-layout-sider {
    background: #efefef !important;
  }
  .ant-input-suffix{
    svg{
        color: #687079;
    }
  }
`
export const globalStyles = <Global styles={basicStyles} />
export const ApplicationFrame = styled.div``
