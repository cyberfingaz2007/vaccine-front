'use strict';

import type {Action} from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  id: ?string;
  name: ?string;
};

const initialState = {
  isLoggedIn: false,
  userId: null,
  userName: null,
};

function LoginReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'LOGGED_IN':
      let {userId, userName} = action.data;
      return {
        isLoggedIn: true,
        userId,
        userName,
      };
      break;
    case 'LOGGED_OUT':
      return initialState;
      break;
    default:
      return state;
  }
}

module.exports = LoginReducer;
