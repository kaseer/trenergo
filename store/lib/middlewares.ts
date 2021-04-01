import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { reducer } from '../reducers'

function addmiddleware(middleware: any) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const logger = createLogger({
  predicate: (getState: any, action: any) => !/^@@/.test(action.type),
  collapsed: true,
})
const middlewares: any = [thunk]
if (typeof window !== 'undefined') {
  middlewares.push(logger)
}

const persistConfig: any = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage: storage,
  whitelist: [], // place to select which state you want to persist
}
const persistedReducer = persistReducer(persistConfig, reducer)

const addMiddlewars = addmiddleware(middlewares)
export { addMiddlewars, logger, persistedReducer }
