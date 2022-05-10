import { ActionType } from '../action-types'

interface LoginModalAction {
  type: ActionType.LOGIN_MODAL,
  payload: boolean
}

export type Action = LoginModalAction
