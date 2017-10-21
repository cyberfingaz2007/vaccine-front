import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import * as projectActions from '../actions/project'
import * as communityActions from '../../communities/actions/community'

import PanelWidget from '../../../components/ui/PanelWidget'
import ProjectForm from '../components/ProjectForm'

// require('../../smartadmin/components/less/components.less');

class NewProject extends React.Component {
	componentWillMount () {
    this.props.communityListRequest()
  }
  
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Project">
          	<ProjectForm communities={this.props.communities}  addProjectRequest={this.props.addProjectRequest} />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}

const mapStateToProps = state => ({
  communities: state.community.dataList,
  loading: state.community.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...communityActions, ...projectActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProject);

//export default NewProject
