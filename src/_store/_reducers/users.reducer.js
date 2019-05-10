import { userConstants } from '../_constants';

export function users(state = { userFormShow: false }, action) {
  switch (action.type) {

    case userConstants.USER_GETALL:
      return {
        ...state,
        items: action.users
      }
    case userConstants.USER_FORM_SHOW:
      return {
        ...state,
        userFormShow: !state.userFormShow
      }
      case userConstants.USER_PASS:
      return {
        ...state,
        pass: !state.pass
      }
      case userConstants.USER_UPDATED:
      return {
        ...state,
        userUpdated: action.user
      }

    default:
      return state
  }
}