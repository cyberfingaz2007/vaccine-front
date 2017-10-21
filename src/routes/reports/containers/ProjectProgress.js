import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import * as projectActions from '../../projects/actions/project'

import PanelWidget from '../../../components/ui/PanelWidget'
import FirstProjectProgressStrip from './FirstProjectProgressStrip'
// require('../../smartadmin/components/less/components.less');

class ProjectProgress extends React.Component {

	componentWillMount () {
    this.props.projectListRequest()
  }

  render() {
    return (
      <FirstProjectProgressStrip />
    )
  }
}

/*
const mapStateToProps = state => ({
  pieChartData: state.reports.progressPieTillDate,
  projects: state.project.dataList,
  loading: state.reports.isFetching
})
*/
function mapDispatchToProps(dispatch){
    return bindActionCreators({...projectActions},dispatch);
}

export default connect(null,mapDispatchToProps)(ProjectProgress);

//export default ProjectProgress
