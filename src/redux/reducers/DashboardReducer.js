'use strict';

const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  vacGraph:[],
  recentlyAdded:[],
  totVacNum:null,
  numOfProjects:null,
  numOfCompProjects:0,
  numOfPatients: null,
  projCompStats:[],
  projImpact:[]
}

function DashboardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_COMP_PROJ_STATUS_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_COMP_PROJ_STATUS_COMPLETED':
      return {
        ...state,
        projCompStats: action.data.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_COMP_PROJ_STATUS_ERROR':
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
        recentlyAdded: action.data.data,
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
        totVacNum: action.data.data.totVal,
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
        numOfProjects: action.data.data.numProjects,
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

    case 'FETCH_NUM_ALL_PATIENT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_NUM_ALL_PATIENT_COMPLETED':
      return {
        ...state,
        numOfPatients: action.data.data.totPatients,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_NUM_ALL_PATIENT_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROJ_IMPACT_WITH_DATA_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJ_IMPACT_WITH_DATA_COMPLETED':
      return {
        ...state,
        projImpact: action.data.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJ_IMPACT_WITH_DATA_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROJ_IMPACT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJ_IMPACT_COMPLETED':
      return {
        ...state,
        projImpact: action.data.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJ_IMPACT_ERROR':
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
