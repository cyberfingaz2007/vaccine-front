import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import * as projectActions from '../actions/project'
import ProjectTableRow from '../components/ProjectTableRow'

import PanelWidget from '../../../components/ui/PanelWidget'

// require('../../smartadmin/components/less/components.less');

class ProjectList extends React.Component {
	constructor(props){
    super(props);
  }

  render() {
    if (!this.props.projects) {
      return (
        <div><p>There are no projects to show</p></div>
      );
    } else {
      return (
        <Table striped bordered condensed hover responsive fill>
  		    <thead>
  		      <tr>
  		        <th>#</th>
  		        <th>Project Name</th>
  		        <th>Community</th>
  		        <th>Projected Duration</th>
  		        <th>Budget</th>
  		        <th>Field Workers</th>
  		        <th>Project Start Date</th>
  		        <th>Project Status</th>
  		      </tr>
  		    </thead>
  		    <tbody>
  		      {this.props.projects.map((project, i)=>(<ProjectTableRow key={i} project={project} />))}
  		    </tbody>
  		  </Table>
      )
    }
  }
}

export default ProjectList