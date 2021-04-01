import React, { FC, memo } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../../store'
import { persistStore } from 'redux-persist'
import AppLoading from '../app-loading'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { globalStyles } from '../../shared/styles'

const RootElement: FC<any> = (props) => {
  const { Component, pageProps }: any = props

  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </CacheProvider>
  )
}
export default memo(RootElement)
