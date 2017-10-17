import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import SmallBanner from '../../../components/ui/SmallBanner'
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
    		<Col md={7}>
          <PanelWidget panelHeader="Vaccination Graph">
            <span>this is the canvas for the Vaccination Graph</span>
          </PanelWidget>
        </Col>
        <Col md={5}>
          <PanelWidget panelHeader="Recently Added">
            <span>this is the space for the Recently Added Vaccinations</span>
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}