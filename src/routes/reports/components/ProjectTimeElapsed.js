import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

export default class ProjectTimeElapsed extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
      <PanelWidget panelHeader="Project Time Elapsed">
        <span>this is the canvas for the Project Time Elapsed</span>

      </PanelWidget>
    )
  }
}