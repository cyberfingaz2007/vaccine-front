import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import * as reportsActions from '../actions/reports'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

class ProjectTimeElapsed extends React.Component{
	constructor(props){
    super(props);
    this.state = {};

    this.handleProjectChange = this.handleProjectChange.bind(this);

  }

  componentDidMount () {
    
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    this.props.projectTimeElapsedRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Project Time Elapsed">
        <span>this is the canvas for the Project Time Elapsed</span>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Project</ControlLabel>
          <FormControl componentClass="select" placeholder="Select Project" onChange={this.handleProjectChange} value={this.state.project}>
            <option value="select">Select Project</option>
            {this.props.projects.map((project, i) => (<option key={i} value={project.id}>{project.project_name}</option>) )}
          </FormControl>
        </FormGroup>
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
    return bindActionCreators({...reportsActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectTimeElapsed);

//export default ProjectTimeElapsed