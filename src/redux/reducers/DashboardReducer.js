'use strict';

const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  vacGraph:[],
  recentlyAdded:[],
  totVacNum:null,
  timeElapsed:null,
  budgetSpent:null,
  numOfProjects:null
}

function DashboardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_VAC_GRAPH_DATA_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_VAC_GRAPH_DATA_COMPLETED':
      return {
        ...state,
        vacGraph: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_VAC_GRAPH_DATA_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_RECENTLY_ADDED_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_RECENTLY_ADDED_COMPLETED':
      return {
        ...state,
        recentlyAdded: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_RECENTLY_ADDED_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_TOTAL_VACC_NUM_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_TOTAL_VACC_NUM_COMPLETED':
      return {
        ...state,
        totVacNum: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_TOTAL_VACC_NUM_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_TIME_ELAPSED_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_TIME_ELAPSED_COMPLETED':
      return {
        ...state,
        timeElapsed: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_TIME_ELAPSED_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_BUDGET_SPENT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_BUDGET_SPENT_COMPLETED':
      return {
        ...state,
        budgetSpent: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_BUDGET_SPENT_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_NUM_OF_PROJECTS_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_NUM_OF_PROJECTS_COMPLETED':
      return {
        ...state,
        numOfProjects: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_NUM_OF_PROJECTS_ERROR':
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

export default DashboardReducer;
