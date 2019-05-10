import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_LOGIN:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.USER_LOGOUT:
      return {
        loggingIn: false,
        user: {}
      };
    default:
      return state
  }
}