'use strict';


const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  dataList:[],
  currentPatient:null
}

function PatientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_PATIENT_LIST_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PATIENT_LIST_COMPLETED':
      return {
        ...state,
        dataList: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PATIENT_LIST_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PATIENT_ADD_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PATIENT_ADD_COMPLETED':
      return {
        ...state,
        //dataList: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PATIENT_ADD_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PATIENT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PATIENT_COMPLETED':
      return {
        ...state,
        currentPatient: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PATIENT_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }
    default:
      return state;
  }
}

export default PatientReducer;
