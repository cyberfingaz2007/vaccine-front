import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import * as dashActions from '../actions/dashboard'

import Select2 from '../../../components/forms/inputs/Select2'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

import ChartJsGraph from '../../../components/graphs/chartjs/ChartJsGraph'

const statusChartData = {
  "labels": ["Project 0", "Project 1", "Project 2", "Project 3", "Project 4"],
  "datasets": [
    {
      "label": "My First dataset",
      "fillColor": "rgba(220,220,220,0.5)",
      "strokeColor": "rgba(220,220,220,0.8)",
      "highlightFill": "rgba(220,220,220,0.75)",
      "highlightStroke": "rgba(220,220,220,1)",
      "data": [65, 59, 80, 81, 56]
    }
  ]
}
class CompletionStatus extends React.Component{
	constructor(props){
    super(props);
    this.state = {};

    this.handleProjectChange = this.handleProjectChange.bind(this);

  }

  componentDidMount () {
    
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    //this.props.progPieTillDateRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Project Completion Status(Percentages)">
        <ChartJsGraph type="bar" data={statusChartData}/>
      </PanelWidget>
    )
  }
}


const mapStateToProps = state => ({
  pieChartData: state.reports.progressPieTillDate,
  projects: state.project.dataList,
  loading: state.reports.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...dashActions},dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(CompletionStatus);

export default CompletionStatus