import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
//import { hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries} from '../../Data/SeriesJSON'
//import { addSeries, fetchAllSeries, fetchSeriesByCategory } from '../../Networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchPatientList(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PATIENT_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_LIST_ERROR", error})
   }
}
export function* fetchPatient(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PATIENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_ERROR", error})
   }
}

export function* addPatientSaga(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PATIENT_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_ADD_ERROR", error})
   }
}
