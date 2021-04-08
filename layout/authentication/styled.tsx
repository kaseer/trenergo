import styled from '@emotion/styled'

export const AuthWrapper = styled.div`
  display: grid;
  background: #121214;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  
  .ant-input:not(.ant-input-password input) {
    border-bottom: solid 1px #1c1c1e !important;
  }
  .ant-input-password {
    border-bottom: solid 1px #1c1c1e !important;
  }
  input.ant-input:focus {
    --antd-wave-shadow-color: none;
  }
  .ant-layout-sider {
    background: #efefef !important;
  }
  .ant-input-suffix {
    svg {
      color: #687079;
    }
  }
  
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
export const RightContainer = styled.div`
  background-image: url('/background-register.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: initial;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export const LeftContainer = styled.div`
  max-width: 70%;
  min-width: 300px;
  display: flex;
  align-self: center;
  justify-self: center;
  padding: 24px;
`
