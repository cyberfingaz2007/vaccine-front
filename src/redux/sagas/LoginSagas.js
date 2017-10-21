import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { loginUser, logoutUser } from '../../Networking/API'


// attempts to login
/*export function * login (action) {
  let { userName, password } = action.data
  if (password === '') {
    // dispatch failure
    data = "Invalid Password"
    yield put({type: "LOGIN_FAILED", data})
  } else {
    // dispatch successful logins
    try {
       const data = yield loginUser(action.data)
       yield put({type: "LOGGED_IN", data})
    } catch (error) {
      //console.log(error);
       yield put({type: "LOGIN_FAILED", error})
    }
  }
}*/

export function* login(action) {
    try {
       const data = yield loginUser(action.data)
       yield put({type: "LOGGED_IN", data})
    } catch (error) {
      if (error.code == 100) {
        console.log(error.code);
        errMsg = "Unable to locate TeleMax Server. Please make sure you are on the right data network."
        yield put({type: "LOGIN_FAILED", errMsg})
      }else {
        console.log(error.code);
        errMsg = error.message
        yield put({type: "LOGIN_FAILED", errMsg})
      }
    }
}

export function* logout(action) {
   try {
      const data = yield logoutUser()
      yield put({type: "LOGGED_OUT", data})
   } catch (error) {
      yield put({type: "LOG_OUT_FAILED", error})
   }
}
