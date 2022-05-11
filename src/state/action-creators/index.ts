import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const openLoginModal = (open: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_MODAL,
      payload: open,
    })
  }
}
