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
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: transparent;
  }
  .ant-input:focus,
  .ant-input-focused {
    border-color: transparent;
  }
`
export const globalStyles = <Global styles={basicStyles} />
export const ApplicationFrame = styled.div``
