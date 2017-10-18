import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
import ProgressPieChart from './ProgressPieChart'
//import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

export default class TopDailyReportStrip extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Patients Vaccinated for Date">
            <span>this is the canvas for the Vaccination Graph</span>
          </PanelWidget>
        </Col>
        <Col md={4}>
          <ProgressPieChart />
        </Col>
    	</Row>
        
    )
  }
}

