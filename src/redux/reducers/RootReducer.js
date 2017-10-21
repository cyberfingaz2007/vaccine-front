import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import CommunityReducer from './CommunityReducer'
import DashboardReducer from './DashboardReducer'
import PatientReducer from './PatientReducer'
import ProjectReducer from './ProjectReducer'
import ReportReducer from './ReportReducer'
import UserReducer from './UserReducer'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    community: CommunityReducer,
    dashboard: DashboardReducer,
    patient: PatientReducer,
    project: ProjectReducer,
    reports: ReportReducer,
    user: UserReducer,
    routing: routerReducer,
  })

  return rootReducer
}
