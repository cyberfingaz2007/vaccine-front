import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchCommunity, addCommunity, fetchAllCommunities } from '../../networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchPatVaccForDate(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PATIENT_VAC_FOR_DATE_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_VAC_FOR_DATE_ERROR", error})
   }
}
export function* fetchProgPieTillDate(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PROGRESS_PIE_TILL_DATE_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROGRESS_PIE_TILL_DATE_ERROR", error})
   }
}

export function* fetchTotVacc(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_TOTAL_VACC_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_VACC_ERROR", error})
   }
}

export function* fetchTotBudgetSpent(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_ERROR", error})
   }
}

export function* fetchProjectTimeElapsed(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PROJ_TIME_ELAPSED_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJ_TIME_ELAPSED_ERROR", error})
   }
}