import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import { save, load } from 'redux-localstorage-simple'
import globalReducer from './reducers/global'
import applicationReducer from './reducers/application'

const PERSISTED_KEYS: string[] = ['global']

export const store = configureStore({
  reducer: {
    global: globalReducer,
    application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })]
  },
  preloadedState: load({ states: PERSISTED_KEYS }),
})
