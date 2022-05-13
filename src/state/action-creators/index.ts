import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import { UserInfoType } from '../../types'

export const openLoginModal = (open: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_MODAL,
      payload: open,
    })
  }
}

export const logout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT,
    })
  }
}

export const setUserData = (userInfo: UserInfoType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER_INFO,
      payload: userInfo,
    })
  }
}
