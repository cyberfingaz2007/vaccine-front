import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
//import { hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries} from '../../Data/SeriesJSON'
//import { addSeries, fetchAllSeries, fetchSeriesByCategory } from '../../Networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

export function* fetchVaccForDate(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_VAC_GRAPH_DATA_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_VAC_GRAPH_DATA_ERROR", error})
   }
}
export function* fetchRecentlyAdded(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_RECENTLY_ADDED_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_RECENTLY_ADDED_ERROR", error})
   }
}

export function* fetchTotVaccNum(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_TOTAL_VACC_NUM_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TOTAL_VACC_NUM_ERROR", error})
   }
}

export function* fetchTotBudgetSpent(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_BUDGET_SPENT_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_BUDGET_SPENT_ERROR", error})
   }
}

export function* fetchProjectTimeElapsed(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_TIME_ELAPSED_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_TIME_ELAPSED_ERROR", error})
   }
}

export function* fetchNumOfProject(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_NUM_OF_PROJECTS_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_NUM_OF_PROJECTS_ERROR", error})
   }
}