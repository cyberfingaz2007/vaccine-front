import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
import TotVaccPieChart from './TotVaccPieChart'
import ProjectTimeElapsed from './ProjectTimeElapsed'
import TotBudgetPieChart from './TotBudgetPieChart'
//import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

export default class FirstProjectProgressStrip extends React.Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <TotVaccPieChart />
        </Col>
    		<Col md={4}>
          <TotBudgetPieChart />
        </Col>
        <Col md={4}>
          <ProjectTimeElapsed />
        </Col>
    	</Row>
    )
  }
}

