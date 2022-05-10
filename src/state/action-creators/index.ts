import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const openModal = (open: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_MODAL,
      payload: open,
    })
  }
}
