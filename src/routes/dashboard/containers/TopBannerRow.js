import React from 'react'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';
import SmallBanner from '../../../components/ui/SmallBanner'

export default class TopBannerRow extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
    	<Row style={{marginBottom:5 + 'px'}}>
    		<SmallBanner classNoms="sm-st-icon st-red" iClassNoms="fa fa-check-square-o">
          <span>32</span>
          Total Vaccinated
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-violet" iClassNoms="fa fa-envelope-o">
          <span>32</span>
          Total Patients on Platfm
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-blue" iClassNoms="fa fa-dollar">
          <span>0</span>
          Completed Projects
        </SmallBanner>

        <SmallBanner classNoms="sm-st-icon st-green" iClassNoms="fa fa-paperclip">
          <span>32</span>
          Num of Projects
        </SmallBanner>
    	</Row>
    )
  }
}