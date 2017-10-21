import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';
import SmallBanner from '../../../components/ui/SmallBanner'

import * as dashActions from '../actions/dashboard'

class TopBannerRow extends React.Component{
	constructor(props){
    super(props);

  }

  componentWillMount () {
    /*this.props.totVaccNumRequest();
    this.props.numAllPatientsRequest();
    this.props.numOfProjectRequest();*/
    //this.props.totVaccNumRequest();
  }

  render () {
    return (
    	<Row style={{marginBottom:5 + 'px'}}>
    		<SmallBanner classNoms="sm-st-icon st-red" iClassNoms="fa fa-check-square-o">
          <span>{this.props.totVacNum}</span>
          Total Vaccinated
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-violet" iClassNoms="fa fa-user-o">
          <span>{this.props.numOfPatients}</span>
          Total Patients on Platform
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-blue" iClassNoms="fa fa-envelope">
          <span>0</span>
          Completed Projects
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-green" iClassNoms="fa fa-envelope-open-o">
          <span>{this.props.numOfProjects}</span>
          Num of Projects
        </SmallBanner>
    	</Row>
    )
  }
}

const mapStateToProps = state => ({
  totVacNum: state.dashboard.totVacNum,
  numOfProjects: state.dashboard.numOfProjects,
  numOfCompProjects: state.dashboard.numOfCompProjects,
  numOfPatients: state.dashboard.numOfPatients,
  loading: state.dashboard.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...dashActions},dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(TopBannerRow);

export default TopBannerRow