import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
//import { hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries} from '../../Data/SeriesJSON'
//import { addSeries, fetchAllSeries, fetchSeriesByCategory } from '../../Networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchProjectList(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PROJECT_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_LIST_ERROR", error})
   }
}
export function* fetchProject(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PROJECT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_ERROR", error})
   }
}

export function* addProjectSaga(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_PROJECT_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_ADD_ERROR", error})
   }
}
