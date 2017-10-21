import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import * as projectActions from '../actions/project'
import ProjectTableRow from '../components/ProjectTableRow'

import PanelWidget from '../../../components/ui/PanelWidget'
import ProjectList from './ProjectList'
// require('../../smartadmin/components/less/components.less');

class Projects extends React.Component {
	constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.projectListRequest()

  }
  
  render() {
    return (
      <Row>
    		<Col md={12}>
          <PanelWidget panelHeader="List of Projects">
            {(this.props.projects.length > 0) ? <ProjectList projects={this.props.projects} /> : <div><p>There are no projects to show</p></div>}
          </PanelWidget>
        </Col>
        
    	</Row>
    )
  }
}


const mapStateToProps = state => ({
  projects: state.project.dataList,
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...projectActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);

//export default Projects