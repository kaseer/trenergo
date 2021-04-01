import styled from '@emotion/styled'

export const AppLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 24px !important;
`
export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 24px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    max-width: 250px;
  }
`
