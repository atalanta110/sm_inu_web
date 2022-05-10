import { ActionType } from '../action-types'
import { Action } from '../actions'

interface InitialSate {
  login_modal: boolean
}

const initialState: InitialSate = {
  login_modal: false,
}

const reducer = (state: InitialSate = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN_MODAL:
      return {
        ...state,
        login_modal: action.payload,
      }
    default:
      return state
  }
}

export default reducer
