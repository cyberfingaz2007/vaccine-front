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

    // dashboard sagas only
    takeLatest('FETCH_TOTAL_VACC_NUM_REQUEST', dashboardSaga.fetchNumAllTotVaccSaga),
    takeLatest('FETCH_RECENTLY_ADDED_REQUEST', dashboardSaga.fetchRecentlyAddedSaga),
    takeLatest('FETCH_NUM_ALL_PATIENT_REQUEST', dashboardSaga.fetchNumberAllPatientsSaga),
    takeLatest('FETCH_NUM_OF_PROJECTS_REQUEST', dashboardSaga.fetchNumOfProjectSaga),
    takeLatest('FETCH_COMP_PROJ_STATUS_REQUEST', dashboardSaga.fetchProjectsCompStatsSaga),
    takeLatest('FETCH_PROJ_IMPACT_REQUEST', dashboardSaga.fetchProjectImpactSaga),
    takeLatest('FETCH_PROJ_IMPACT_WITH_DATA_REQUEST', dashboardSaga.fetchProjectImpactWithDataSaga),

    /*For Patients */
    takeLatest('FETCH_PATIENT_LIST_REQUEST', patientSaga.fetchPatientList),
    takeLatest('FETCH_PATIENT_REQUEST', patientSaga.fetchPatient),
    takeLatest('FETCH_PATIENT_ADD_REQUEST', patientSaga.addPatientSaga),

    /*For Projects */
    takeLatest('FETCH_PROJECT_LIST_REQUEST', projectSaga.fetchProjectList),
    takeLatest('FETCH_PROJECT_REQUEST', projectSaga.fetchProject),
    takeLatest('FETCH_PROJECT_ADD_REQUEST', projectSaga.addProjectSaga),

    /*For Reports */
    takeLatest('FETCH_PATIENT_VAC_FOR_DATE_REQUEST', reportSaga.fetchPatVaccForDateSaga),
    takeLatest('FETCH_PROGRESS_PIE_TILL_DATE_REQUEST', reportSaga.fetchProgPieTillDateSaga),
    takeLatest('FETCH_TOTAL_VACC_REQUEST', reportSaga.fetchTotVaccSaga),
    takeLatest('FETCH_TOTAL_BUDGET_SPENT_REQUEST', reportSaga.fetchTotBudgetSpentSaga),
    takeLatest('FETCH_TOTAL_BUDGET_SPENT_WITH_DATA_REQUEST', reportSaga.fetchTotBudgetSpentWithDataSaga),
    takeLatest('FETCH_PROJ_TIME_ELAPSED_REQUEST', reportSaga.fetchProjectTimeElapsedSaga),

    takeLatest('FETCH_ALL_VACC_FOR_PROJECTS_REQUEST', reportSaga.fetchAllVaccsForProjectsSaga),
    takeLatest('FETCH_VACC_FOR_PROJ_BY_DATE_REQUEST', reportSaga.fetchVaccsForProjectsByDateSaga),
    takeLatest('FETCH_TOT_VACC_BY_PROJ_REQUEST', reportSaga.fetchTotVaccForProjectSaga),

  ]
}
