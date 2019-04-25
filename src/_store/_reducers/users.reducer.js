import { userConstants } from '../_constants';

export function users(state = {  }, action) {
  switch (action.type) {

    case userConstants.USER_FORM_SHOW:
      return {
        userFormShow: state.userFormShow ? false : true
      }

    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case userConstants.USERCREATE_REQUEST:
      return {
        loading: true
      }
    case userConstants.USERCREATE_SUCCESS:
      return {
        user: action.user
      }
    case userConstants.USERCREATE_FAILURE:
      return {
        error: action.error
      }

    case userConstants.USERUPDATE_REQUEST:
      return {
        loading: true
      }
    case userConstants.USERUPDATE_SUCCESS:
      return {
        user: action.user
      }
    case userConstants.USERUPDATE_FAILURE:
      return {
        error: action.error
      }

    case userConstants.USERREMOVE_REQUEST:
      return {
        loading: true
      }
    case userConstants.USERREMOVE_SUCCESS:
      return {
        success: action.success
      }
    case userConstants.USERREMOVE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}