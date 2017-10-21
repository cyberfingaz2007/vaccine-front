'use strict';


const initialState = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  isLoggedIn:true,
  fullName:"Unknown",
  firstName:"Unknown",
  userName:"Unknown"
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        isLoggedIn: true,
        fullName:"Jude Udoh",
        firstName:"Jude",
        userName:"cyberfingaz2007"
      };
      break;
    case 'LOGGED_OUT':
      return initialState;
      break;
    default:
      return state;
  }
}

export default UserReducer;
