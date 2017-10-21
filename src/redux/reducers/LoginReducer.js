'use strict';

import type {Action} from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn:true,
  isLoggingIn:false,
  isLoginError:false,
  loginError:null,
  isLoggingOut: false,
  isLogoutError:false,
  logoutError:null,
  userId:null,
  userName:null,
  email:null,
  lastName:null,
  firstName:null
}

export type State = {
  isLoggedIn: boolean;
  id: ?string;
  name: ?string;
};

function LoginReducer(state: State = INITIAL_STATE, action): State {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
        isLoginError: false,
        loginError: null,
      }
    case 'LOGGED_IN':
      let user = action.data;
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        lastName: user.get('lastName'),
        //userId,
        userName: user.get('username'),
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggingIn: false,
        isLoginError: true,
        loginError: action.errMsg,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
      }
    case 'LOGGED_OUT':
      return INITIAL_STATE
    case 'LOG_OUT_FAILED':
      return {
        ...state,
        isLogoutError: true,
        logoutError: action.error,
      }
    default:
      return state;
  }
}

export default LoginReducer;
