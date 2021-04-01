import React, { memo } from 'react'
import { Spin, Typography } from 'antd'
import { AppLoadingContainer, LoadingWrapper } from './styled'

const { Title } = Typography
const AppLoading = ({ title, img = '/text-logo.svg' }: any) => {
  return (
    <AppLoadingContainer>
      <LoadingWrapper>
        {!img && title && (
          <Title title="TrenerGo" level={2}>
            {title}
          </Title>
        )}
        {img && <img src={img} alt="logo" />}
        <Spin size="large" />
      </LoadingWrapper>
    </AppLoadingContainer>
  )
}
export default memo(AppLoading)
