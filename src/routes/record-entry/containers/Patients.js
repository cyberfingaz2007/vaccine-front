import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import * as patientActions from '../actions/patient'
import PatientTableRow from '../components/PatientTableRow'
import PatientList from './PatientList'

import PanelWidget from '../../../components/ui/PanelWidget'

// require('../../smartadmin/components/less/components.less');

class Patients extends React.Component {
	constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.patientListRequest()

  }
  
  render() {
    return (
      <Row>
    		<Col md={12}>
          <PanelWidget panelHeader="Registered Patients">
            {(this.props.patients.length > 0) ? <PatientList patients={this.props.patients} /> : <div><p>There are no patients to show</p></div>}
          </PanelWidget>
        </Col>
        
    	</Row>
    )
  }
}


const mapStateToProps = state => ({
  patients: state.patient.dataList,
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...patientActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Patients);

//export default Patients