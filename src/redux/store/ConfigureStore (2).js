//import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import RootReducer from '../Reducers/RootReducer'
import store from './Store'

export default () => {
  return store(RootReducer, rootSaga)
}
