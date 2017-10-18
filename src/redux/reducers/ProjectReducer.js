'use strict';


const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  dataList:[],
  currentProject:null
}


function ProjectReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_PROJECT_LIST_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJECT_LIST_COMPLETED':
      return {
        ...state,
        dataList: action.data.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJECT_LIST_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROJECT_ADD_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJECT_ADD_COMPLETED':
      return {
        ...state,
        //dataList: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJECT_ADD_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROJECT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJECT_COMPLETED':
      return {
        ...state,
        currentProject: action.data.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJECT_ERROR':
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

export default ProjectReducer;
