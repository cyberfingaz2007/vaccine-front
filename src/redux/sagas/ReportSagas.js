import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPatVaccForDate, 
         fetchProgPieTillDate, 
         fetchTotVacc, 
         fetchTotBudgetSpent, 
         fetchProjectTimeElapsed, 
         fetchAllVaccForProjects, 
         fetchVaccForProjectsByDate, fetchTotVaccByProject } from '../../networking/API'

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
      const data = yield fetchTotBudgetSpent(action.data)
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_ERROR", error})
   }
}

export function* fetchTotBudgetSpentWithDataSaga(action) {
   try {
      const data = yield fetchTotBudgetSpent(action.data)
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_WITH_DATA_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_BUDGET_SPENT_WITH_DATA_ERROR", error})
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

//////////////////////////////////

export function* fetchAllVaccsForProjectsSaga(action) {
   try {
      const data = yield fetchAllVaccForProjects()
      yield put({type: "FETCH_ALL_VACC_FOR_PROJECTS_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_ALL_VACC_FOR_PROJECTS_ERROR", error})
   }
}

export function* fetchVaccsForProjectsByDateSaga(action) {
   try {
      const data = yield fetchVaccForProjectsByDate(action.data)
      yield put({type: "FETCH_VACC_FOR_PROJ_BY_DATE_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_VACC_FOR_PROJ_BY_DATE_ERROR", error})
   }
}


export function* fetchTotVaccForProjectSaga(action) {
   try {
      const data = yield fetchTotVaccByProject(action.data)
      yield put({type: "FETCH_TOT_VACC_BY_PROJ_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOT_VACC_BY_PROJ_ERROR", error})
   }
}