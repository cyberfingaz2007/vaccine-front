import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
//import { hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries} from '../../Data/SeriesJSON'
//import { addSeries, fetchAllSeries, fetchSeriesByCategory } from '../../Networking/API'

//var hollySeries, nollySeries, novelas, koreanSeries, topRatedSeries = ["jude":"jude"];

const sampleData = {
   "What": "de Fuck?"
}

const communities = [
   {
      "id": 1,
      "communityName": "JUMAIN Comm",
      "maleAbv10": 30000,
      "femBtw10N15": 40345,
      "childBel10": 83567,
      "femAbv15": 32356,
      "project": {
         "1d": 1,
         "projectName": "Project 1",
         "projectStatus": "On-Going"
      },
   },
   {
      "id": 2,
      "communityName": "CyberComm",
      "maleAbv10": 36744,
      "femBtw10N15": 23566,
      "childBel10": 68575,
      "femAbv15": 47679,
      "project": {
         "1d": 2,
         "projectName": "Project 2",
         "projectStatus": "On-Going"
      },
   }

]

export function* fetchCommunityList(action) {
   try {
      const data = yield call(() => communities)
      yield put({type: "FETCH_COMMUNITY_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_LIST_ERROR", error})
   }
}
export function* fetchCommunity(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_COMMUNITY_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_ERROR", error})
   }
}

export function* addCommunitySaga(action) {
   try {
      const data = yield call(() => sampleData)
      yield put({type: "FETCH_COMMUNITY_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_ADD_ERROR", error})
   }
}
