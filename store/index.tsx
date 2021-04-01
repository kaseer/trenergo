//@typescript-eslint/explicit-module-boundary-types
import { useMemo } from 'react'

import { configureStore, Store } from '@reduxjs/toolkit'
import { logger, persistedReducer } from './lib/middlewares'
import thunk from 'redux-thunk'
//const storage = typeof window !== 'undefined' && require('redux-persist/lib/storage')
const initialStore: any = {}

let store

function makeStore(initialState = initialStore): Store<any> {
  return configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export const initializeStore: any = (preloadedState: any) => {
  let _store = store ?? makeStore(preloadedState)
  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store
  return _store
}

export function useStore(initialState: any): any {
  const store: any = useMemo(() => initializeStore(initialState), [
    initialState,
  ])
  return store
}
