import styled from '@emotion/styled'

export const RegisterWrapper = styled.div`
  display: grid;
  background: #121214;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
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
`
export const LeftContainer = styled.div`
  max-width: 70%;
  min-width: 300px;
  display: flex;
  align-self: center;
  justify-self: center;
  padding: 24px;
`
