import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import CompletionStatus from '../components/CompletionStatus'
import RecentlyAdded from '../components/RecentlyAdded'
import ProjectImpact from '../components/ProjectImpact'

import PanelWidget from '../../../components/ui/PanelWidget'

export default class MainRow extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
    	<Row>
    		<Col md={5}>
          <CompletionStatus />
          <RecentlyAdded recentlyAdded={this.props.recentlyAdded} projects={this.props.projects}/>
        </Col>
        <Col md={7}>
          <ProjectImpact projImpact={this.props.projImpact} projects={this.props.projects} projectImpactWithDataRequest={this.props.projectImpactWithDataRequest} />
        </Col>
    	</Row>
    )
  }
}