import styled from '@emotion/styled'

export const AuthWrapper = styled.div`
  display: grid;
  background: #121214;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;

  .ant-input:not(.ant-input-password input), .ant-input-password:hover {
    border-bottom: solid 1px #1c1c1e !important;
  }
  .ant-input-password {
    border-bottom: solid 1px #1c1c1e !important;
  }
  input.ant-input:focus {
    --antd-wave-shadow-color: none;
  }
   .ant-input:focus{
   border: none;
   }

  .ant-layout-sider {
    background: #efefef !important;
  }
  .ant-input-suffix {
    svg {
      color: #687079;
    }
  }

  .ant-form-item-has-error .ant-input:not(.ant-input-password input),
  .ant-form-item-has-error .ant-input-affix-wrapper,
  .ant-form-item-has-error .ant-input:hover,
  .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border: none;
    border-bottom: 1px solid #ff0000 !important;
  }
  .ant-form-item-explain-error {
    color: #ff0000;
    text-align: right;
    font-size: 12px;
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
