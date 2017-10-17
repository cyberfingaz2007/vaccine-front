import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

export default class TotVaccPieChart extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
      <PanelWidget panelHeader="Total Vaccinated">
        <span>this is the canvas for the Total Vaccinated</span>

      </PanelWidget>
    )
  }
}