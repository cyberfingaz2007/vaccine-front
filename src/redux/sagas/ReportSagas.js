import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPatVaccForDate, fetchProgPieTillDate, fetchTotVacc, fetchTotBudgetSpent, fetchProjectTimeElapsed } from '../../networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchPatVaccForDateSaga(action) {
   try {
      const data = yield fetchPatVaccForDate()
      yield put({type: "FETCH_PATIENT_VAC_FOR_DATE_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_VAC_FOR_DATE_ERROR", error})
   }
}
export function* fetchProgPieTillDateSaga(action) {
   try {
      const data = yield fetchProgPieTillDate()
      yield put({type: "FETCH_PROGRESS_PIE_TILL_DATE_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROGRESS_PIE_TILL_DATE_ERROR", error})
   }
}

export function* fetchTotVaccSaga(action) {
   try {
      const data = yield fetchTotVacc()
      yield put({type: "FETCH_TOTAL_VACC_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_VACC_ERROR", error})
   }
}

export function* fetchTotBudgetSpentSaga(action) {
   try {
      const data = yield fetchTotBudgetSpent()
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_ERROR", error})
   }
}

export function* fetchProjectTimeElapsedSaga(action) {
   try {
      const data = yield fetchProjectTimeElapsed()
      yield put({type: "FETCH_PROJ_TIME_ELAPSED_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJ_TIME_ELAPSED_ERROR", error})
   }
}