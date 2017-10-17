import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import * as patientActions from '../actions/patient'
import PatientTableRow from '../components/PatientTableRow'

import PanelWidget from '../../../components/ui/PanelWidget'

// require('../../smartadmin/components/less/components.less');

export default class PatientList extends React.Component {
	constructor(props){
    super(props);
  }

  render() {
    if (!this.props.patients) {
      return (
        <div><p>There are no patients to show</p></div>
      );
    } else {
      return (
        <Table striped bordered condensed hover responsive fill>
  		    <thead>
  		      <tr>
  		        <th>#</th>
  		        <th>Patient Code</th>
  		        <th>Full Name</th>
  		        <th>Sex</th>
  		        <th>DOB</th>
  		        <th>Vaccination Status</th>
  		        <th>Vaccination Date</th>
  		        <th>Registered By:</th>
  		      </tr>
  		    </thead>
  		    <tbody>
  		    	{this.props.patients.map((patient, i)=>(<PatientTableRow key={i} patient={patient} />))}
  		    </tbody>
  		  </Table>
      )
    }
  }
}
