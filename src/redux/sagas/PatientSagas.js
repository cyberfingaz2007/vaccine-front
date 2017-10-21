import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchSinglePatient, addPatient, fetchAllPatients } from '../../networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchPatientList(action) {
   try {
      const data = yield fetchAllPatients()
      yield put({type: "FETCH_PATIENT_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_LIST_ERROR", error})
   }
}
export function* fetchPatient(action) {
   try {
      const data = yield fetchSinglePatient(action.data)
      yield put({type: "FETCH_PATIENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_ERROR", error})
   }
}

export function* addPatientSaga(action) {
   try {
      const data = yield addPatient(action.data)
      yield put({type: "FETCH_PATIENT_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PATIENT_ADD_ERROR", error})
   }
}
