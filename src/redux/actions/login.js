// Request Login
export function loginRequest(data) {
  console.log("Testing Login actions");
  console.log(data);
  return {
    type : 'LOGIN_REQUEST',
    data,
  }
}

export function loggedInRequest(data) {
  console.log("Testing Login actions");
  console.log(data);
  return {
    type : 'LOGGED_IN',
    data,
  }
}

// Request Logout
export function logoutRequest() {
  console.log("Testing Logout actions");
  return {
    type : 'LOGOUT_REQUEST',
  }
}
