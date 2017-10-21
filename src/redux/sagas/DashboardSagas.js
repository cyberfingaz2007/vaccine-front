import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchNumAllTotVacc,
         fetchNumberAllPatients,
         fetchNumOfComProjects,
         fetchNumOfProjects,
         fetchRecAddPatients,
         fetchProjectsCompStats,
         fetchProjectImpact,
         fetchProjectImpactWithData } from '../../networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchNumAllTotVaccSaga(action) {
   try {
      const data = yield fetchNumAllTotVacc()
      yield put({type: "FETCH_TOTAL_VACC_NUM_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_VACC_NUM_ERROR", error})
   }
}
export function* fetchRecentlyAddedSaga(action) {
   try {
      const data = yield fetchRecAddPatients()
      yield put({type: "FETCH_RECENTLY_ADDED_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_RECENTLY_ADDED_ERROR", error})
   }
}

export function* fetchNumberAllPatientsSaga(action) {
   try {
      const data = yield fetchNumberAllPatients()
      yield put({type: "FETCH_NUM_ALL_PATIENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_NUM_ALL_PATIENT_ERROR", error})
   }
}

export function* fetchNumOfProjectSaga(action) {
   try {
      const data = yield fetchNumOfProjects()
      yield put({type: "FETCH_NUM_OF_PROJECTS_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_NUM_OF_PROJECTS_ERROR", error})
   }
}


export function* fetchProjectsCompStatsSaga(action) {
   try {
      const data = yield fetchProjectsCompStats()
      yield put({type: "FETCH_COMP_PROJ_STATUS_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMP_PROJ_STATUS_ERROR", error})
   }
}

export function* fetchProjectImpactSaga(action) {
   try {
      const data = yield fetchProjectImpact()
      yield put({type: "FETCH_PROJ_IMPACT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJ_IMPACT_ERROR", error})
   }
}

export function* fetchProjectImpactWithDataSaga(action) {
   try {
      const data = yield fetchProjectImpactWithData(action.data)
      yield put({type: "FETCH_PROJ_IMPACT_WITH_DATA_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJ_IMPACT_WITH_DATA_ERROR", error})
   }
}