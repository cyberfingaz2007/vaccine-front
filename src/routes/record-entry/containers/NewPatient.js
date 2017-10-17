import React from 'react'
import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';


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

export default class NewPatient extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Patients">
          	<PatientForm projects={projects} />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}

