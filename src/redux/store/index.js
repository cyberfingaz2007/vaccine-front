import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
//import { persistStore, autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
//import Config from '../../Config/DebugSettings'
import createSagaMiddleware from 'redux-saga'
import rootReduce from '../Reducers/RootReducer'
import R from 'ramda'
import rootSaga from '../Sagas/index'



const defaultState = {
  userStatus:{
    isLoggedIn:false,
    userId:null,
    userName:null
  },
  account:{
    accountId:null,
    acctBal:null,
    lastDebited:null,
    lastCredited:null,
  },
  serizForm:null,
  muvizForm:null,
  comedy:null,
  myLibrary:null,
}

//var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var isDebuggingInChrome = !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});


const sagaMiddleware = createSagaMiddleware()

var createTStore = applyMiddleware(sagaMiddleware, logger)(createStore);

//var createTStore = (createTHStore)(defaultState)

const rootReducer = rootReduce()

//const store = (createTStore)(rootReducer)
/*
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
*/

export default function configureStore(){
  if (isDebuggingInChrome) {
    window.store = store;
  }
  const store = (createTStore)(rootReducer, defaultState)

  sagaMiddleware.run(rootSaga)
  return store;

}
const store = configureStore()
export const history = syncHistoryWithStore(browserHistory, store)
