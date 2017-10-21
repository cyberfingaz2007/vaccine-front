import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
import ProgressPieChart from '../components/ProgressPieChart'
import PatientsVaccinatedChart from '../components/PatientsVaccinatedChart'
//import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

export default class TopDailyReportStrip extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={6}>
          <PatientsVaccinatedChart />
        </Col>
        <Col md={5}>
          <ProgressPieChart />
        </Col>
    	</Row>
        
    )
  }
}

