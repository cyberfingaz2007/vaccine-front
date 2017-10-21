import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import * as projectActions from '../../projects/actions/project'

import PanelWidget from '../../../components/ui/PanelWidget'
import TopDailyReportStrip from '../components/TopDailyReportStrip'
//import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

class DailyReports extends React.Component {
	
	componentWillMount () {
    this.props.projectListRequest()
  }

  render() {
    return (
      <TopDailyReportStrip />
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

export default connect(null,mapDispatchToProps)(DailyReports);

//export default DailyReports