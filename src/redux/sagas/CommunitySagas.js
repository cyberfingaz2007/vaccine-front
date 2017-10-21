import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchSingleCommunity, addCommunity, fetchAllCommunities } from '../../networking/API'


export function* fetchCommunityList(action) {
   try {
      const data = yield fetchAllCommunities()
      console.log("From the saga ")
      console.log(data)
      yield put({type: "FETCH_COMMUNITY_LIST_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_LIST_ERROR", error})
   }
}
export function* fetchCommunity(action) {
   try {
      const data = yield fetchSingleCommunity(action.data)
      yield put({type: "FETCH_COMMUNITY_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_ERROR", error})
   }
}

export function* addCommunitySaga(action) {
   try {
      const data = yield addCommunity(action.data)
      yield put({type: "FETCH_COMMUNITY_ADD_COMPLETED", data})
   } catch (error) {
      yield put({type: "FETCH_COMMUNITY_ADD_ERROR", error})
   }
}
