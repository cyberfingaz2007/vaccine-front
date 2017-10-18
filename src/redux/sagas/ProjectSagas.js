import { call, put, takeLatest } from 'redux-saga/effects'
import { addProject, fetchAllProjects, fetchSingleProject } from '../../networking/API'
//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchProjectList(action) {
   try {
      const data = yield fetchAllProjects()
      yield put({type: "FETCH_PROJECT_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_LIST_ERROR", error})
   }
}
export function* fetchProject(action) {
   try {
      const data = yield fetchSingleProject(action.data)
      yield put({type: "FETCH_PROJECT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_ERROR", error})
   }
}

export function* addProjectSaga(action) {
   try {
      const data = yield addProject(action.data)
      yield put({type: "FETCH_PROJECT_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_PROJECT_ADD_ERROR", error})
   }
}
