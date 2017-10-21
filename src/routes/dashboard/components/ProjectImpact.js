import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import * as dashActions from '../actions/dashboard'

//import Select2 from '../../../components/forms/inputs/Select2'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

import ChartJsGraph from '../../../components/graphs/chartjs/ChartJsGraph'

const impactChartData = {
  "labels": ["2017-07-08", "2017-07-10", "2017-07-12", "2017-07-14", "2017-07-16"],
  "datasets": [
    {
      "label": "My First dataset",
      "fillColor": "rgba(124,35,20,0.9)",
      "strokeColor": "rgba(124,35,20,0.8)",
      "highlightFill": "rgba(124,35,20,0.75)",
      "highlightStroke": "rgba(220,220,220,1)",
      "data": [0, 23, 46, 48, 56]
    }
  ]
}
class ProjectImpact extends React.Component{
	constructor(props){
    super(props);
    this.state = {};

    this.handleProjectChange = this.handleProjectChange.bind(this);

  }

  componentDidMount () {
    
  }

  componentWillMount () {
    //this.props.projectImpactRequest();
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    this.props.projectImpactWithDataRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Project Impact | Change in the Number of Healthy children   ">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Project</ControlLabel>
          <FormControl componentClass="select" placeholder="Select Project" onChange={this.handleProjectChange} value={this.state.project}>
            <option value="select">Select Project</option>
            {this.props.projects.map((project, i) => (<option key={i} value={project.id}>{project.project_name}</option>) )}
          </FormControl>
        </FormGroup>

        <ChartJsGraph type="line" data={this.props.projImpact}/>

      </PanelWidget>
    )
  }
}


const mapStateToProps = state => ({
  projImpact: state.dashboard.projImpact,
  projects: state.project.dataList,
  loading: state.dashboard.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...dashActions},dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(ProjectImpact);

export default ProjectImpact