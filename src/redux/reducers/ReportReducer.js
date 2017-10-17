'use strict';


const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  isFetchError: false,
  fetchError: null,
  patVaccByDate:[],
  progressPieTillDate:null,
  totalVaccinated:[],
  totBudgetSpent:null,
  projectTimeElapsed:null
}

function ReportReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_PATIENT_VAC_FOR_DATE_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PATIENT_VAC_FOR_DATE_COMPLETED':
      return {
        ...state,
        patVaccByDate: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PATIENT_VAC_FOR_DATE_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROGRESS_PIE_TILL_DATE_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROGRESS_PIE_TILL_DATE_COMPLETED':
      return {
        ...state,
        progressPieTillDate: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROGRESS_PIE_TILL_DATE_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_TOTAL_VACC_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_TOTAL_VACC_COMPLETED':
      return {
        ...state,
        totalVaccinated: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_TOTAL_VACC_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_TOTAL_BUDGET_SPENT_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_TOTAL_BUDGET_SPENT_COMPLETED':
      return {
        ...state,
        totBudgetSpent: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_TOTAL_BUDGET_SPENT_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchError: true,
        fetchError: action.errMsg,
      }

    case 'FETCH_PROJ_TIME_ELAPSED_REQUEST':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchError: false,
        fetchError: null,
      }
    case 'FETCH_PROJ_TIME_ELAPSED_COMPLETED':
      return {
        ...state,
        projectTimeElapsed: action.data,
        isFetching: false,
        isFetched: true,
      }
    case 'FETCH_PROJ_TIME_ELAPSED_ERROR':
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

export default ReportReducer;
