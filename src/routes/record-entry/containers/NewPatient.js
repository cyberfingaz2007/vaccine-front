import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import * as patientActions from '../actions/patient'
import * as projectActions from '../../projects/actions/project'


import PanelWidget from '../../../components/ui/PanelWidget'
import PatientForm from '../components/PatientForm'
/*import TopBannerRow from '../components/TopBannerRow'*/
// require('../../smartadmin/components/less/components.less');
const projects = [
	{
		"id": 1,
		"projectName": "vac proj"
	},
	{
		"id": 2,
		"projectName": "vac proj1"
	},
	{
		"id": 3,
		"projectName": "vac proj2"
	},
	{
		"id": 4,
		"projectName": "vac proj3"
	}
];

class NewPatient extends React.Component {
	componentWillMount () {
    this.props.projectListRequest()
  }

  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Patients">
          	<PatientForm projects={this.props.projects} addPatientRequest={this.props.addPatientRequest} />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}


const mapStateToProps = state => ({
  projects: state.project.dataList,
  loading: state.patient.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...projectActions, ...patientActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPatient);

//export default NewPatient