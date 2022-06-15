import { ActionType } from '../action-types'
import { Action } from '../actions'
import { UserInfoType } from '../../types'

interface InitialSate {
  login_modal: boolean
  user_info: UserInfoType
}

const initialState: InitialSate = {
  login_modal: false,
  user_info: {
    username: '',
    active: false,
    dSMIAmount: 0,
    pastCodes: {
      codesRew1: [],
      codesRew2: [],
      codesRew3: [],
    },
  },
}

const reducer = (state: InitialSate = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN_MODAL:
      return {
        ...state,
        login_modal: action.payload,
      }
    case ActionType.LOGOUT:
      return {
        ...state,
        user_info: initialState.user_info,
      }
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      }
    default:
      return state
  }
}

export default reducer
