import React from 'react'
import dynamic from 'next/dynamic'

const AppLoading = dynamic(() => import('./app-loading'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
const RootElement = dynamic(() => import('./root'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})

export { AppLoading, RootElement }
