import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'
import TopBannerRow from './TopBannerRow'
import MainRow from './MainRow'

import * as dashActions from '../actions/dashboard'
import * as projectActions from '../../projects/actions/project'

//import SecondRow from './SecondRow'
// require('../../smartadmin/components/less/components.less');

class Dashboard extends React.Component {

	componentWillMount () {
    this.props.projectListRequest()
    this.props.totVaccNumRequest();
    this.props.numAllPatientsRequest();
    this.props.numOfProjectRequest();
    this.props.recentlyAddedRequest();
    this.props.projectImpactRequest();

  }
  
  render() {
    return (
      <div>
        <TopBannerRow totVacNum={this.props.totVacNum} numOfProjects={this.props.numOfProjects} numOfCompProjects={this.props.numOfCompProjects} numOfPatients={this.props.numOfPatients} />
        <MainRow recentlyAdded={this.props.recentlyAdded} projects={this.props.projects} projImpact={this.props.projImpact} projectImpactWithDataRequest={this.props.projectImpactWithDataRequest} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  totVacNum: state.dashboard.totVacNum,
  numOfProjects: state.dashboard.numOfProjects,
  numOfCompProjects: state.dashboard.numOfCompProjects,
  numOfPatients: state.dashboard.numOfPatients,
  projImpact: state.dashboard.projImpact,
  recentlyAdded: state.dashboard.recentlyAdded,
  projects: state.project.dataList,

  loading: state.dashboard.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...projectActions, ...dashActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

//export default Dashboard
