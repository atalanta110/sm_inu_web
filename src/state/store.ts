import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import { save, load } from 'redux-localstorage-simple'
import globalReducer from './reducers/global'

const PERSISTED_KEYS: string[] = ['global']

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })]
  },
  preloadedState: load({ states: PERSISTED_KEYS }),
})
