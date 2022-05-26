import { combineReducers } from 'redux'
import { store } from '../store'
import globalReducer from './global'
import applicationReducer from './application'

const reducers = combineReducers({
  global: globalReducer,
  application: applicationReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
