import { ActionType } from '../action-types'
import { UserInfoType } from '../../types'

interface LoginModalAction {
  type: ActionType.LOGIN_MODAL,
  payload: boolean
}

interface LogoutAction {
  type: ActionType.LOGOUT
}

interface SetUserInfoAction {
  type: ActionType.SET_USER_INFO,
  payload: UserInfoType
}

export type Action = LoginModalAction | SetUserInfoAction | LogoutAction
