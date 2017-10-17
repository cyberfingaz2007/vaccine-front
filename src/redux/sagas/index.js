import { takeLatest, takeEvery } from 'redux-saga/effects'
/*import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'
*/
/* ------------- Types ------------- */

/* ------------- Sagas ------------- */
import * as communitySaga from './CommunitySagas'
import * as dashboardSaga from './DashboardSagas'
import * as patientSaga from './PatientSagas'
import * as projectSaga from './ProjectSagas'
import * as reportSaga from './ReportSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some community sagas only
    takeLatest('FETCH_COMMUNITY_LIST_REQUEST', communitySaga.fetchCommunityList),
    takeLatest('FETCH_COMMUNITY_REQUEST', communitySaga.fetchCommunity),
    takeLatest('FETCH_COMMUNITY_ADD_REQUEST', communitySaga.addCommunitySaga),

    takeLatest('FETCH_VAC_GRAPH_DATA_REQUEST', dashboardSaga.fetchVaccForDate),
    takeLatest('FETCH_RECENTLY_ADDED_REQUEST', dashboardSaga.fetchRecentlyAdded),
    takeLatest('FETCH_TOTAL_VACC_NUM_REQUEST', dashboardSaga.fetchTotVaccNum),
    takeLatest('FETCH_BUDGET_SPENT_REQUEST', dashboardSaga.fetchTotBudgetSpent),
    takeLatest('FETCH_TIME_ELAPSED_REQUEST', dashboardSaga.fetchProjectTimeElapsed),
    takeLatest('FETCH_NUM_OF_PROJECTS_REQUEST', dashboardSaga.fetchNumOfProject),

    /*For Patients */
    takeLatest('FETCH_PATIENT_LIST_REQUEST', patientSaga.fetchPatientList),
    takeLatest('FETCH_PATIENT_REQUEST', patientSaga.fetchPatient),
    takeLatest('FETCH_PATIENT_ADD_REQUEST', patientSaga.addPatientSaga),

    /*For Projects */
    takeLatest('FETCH_PROJECT_LIST_REQUEST', projectSaga.fetchProjectList),
    takeLatest('FETCH_PROJECT_REQUEST', projectSaga.fetchProject),
    takeLatest('FETCH_PROJECT_ADD_REQUEST', projectSaga.addProjectSaga),

    /*For Reports */
    takeLatest('FETCH_PATIENT_VAC_FOR_DATE_REQUEST', reportSaga.fetchPatVaccForDate),
    takeLatest('FETCH_PROGRESS_PIE_TILL_DATE_REQUEST', reportSaga.fetchProgPieTillDate),
    takeLatest('FETCH_TOTAL_VACC_REQUEST', reportSaga.fetchTotVacc),
    takeLatest('FETCH_TOTAL_BUDGET_SPENT_REQUEST', reportSaga.fetchTotBudgetSpent),
    takeLatest('FETCH_PROJ_TIME_ELAPSED_REQUEST', reportSaga.fetchProjectTimeElapsed),

  ]
}
