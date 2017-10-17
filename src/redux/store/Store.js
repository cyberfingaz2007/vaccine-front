import { createStore, applyMiddleware, compose } from 'redux'
//import { persistStore, autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import Config from '../../Config/DebugSettings'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'
//import RehydrationServices from '../Services/RehydrationServices'
//import ReduxPersist from '../Config/ReduxPersist'
//import { StartupTypes } from './StartupRedux'

export default (rootReducer, rootSaga) => {

  var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

  var logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true,
  });
  const middleware = []
  const enhancers = []
  var defaultState = {
    userStatus:{
      isLoggedIn:false,
      userId:null,
      userName:null
    },
    categories:[],
    account:{
      accountId:null,
      acctBal:null,
      lastDebited:null,
      lastCredited:null,
    },
    series:{
      isFetching:false,
      topRated:[],
      holly:[],
      nolly:[],
      novelas:[],
      korean:[]
    },
    movies:{
      recentlyAdded:[],
      holly:[],
      nolly:[],
      bolly:[],
    },
    comedy:null,
    myLibrary:null,
  }

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  /*const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = Config.reduxLogging
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }*/

  /* ------------- Assemble Middleware ------------- */
  middleware.push(logger)
  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */
/*
  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }
*/
  const store = createStore(rootReducer, defaultState, applyMiddleware(...middleware))
/*
  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }
*/
  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store;
}
