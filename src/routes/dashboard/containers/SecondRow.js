import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import ProjectImpact from '../components/ProjectImpact'
import PanelWidget from '../../../components/ui/PanelWidget'

export default class SecondRow extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
    	<Row>
    		<Col md={8}>
          <ProjectImpact />
        </Col>
    	</Row>
    )
  }
}