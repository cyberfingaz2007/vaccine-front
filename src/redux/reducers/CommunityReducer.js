'use strict';


const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  dataList:[],
  currentCommunity:null
}


function CommunityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_COMMUNITY_LIST_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_COMMUNITY_LIST_COMPLETED':
      return {
        ...state,
        dataList: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_COMMUNITY_LIST_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_COMMUNITY_ADD_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_COMMUNITY_ADD_COMPLETED':
      return {
        ...state,
        //dataList: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_COMMUNITY_ADD_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_COMMUNITY_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_COMMUNITY_COMPLETED':
      return {
        ...state,
        currentCommunity: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_COMMUNITY_ERROR':
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

export default CommunityReducer;
