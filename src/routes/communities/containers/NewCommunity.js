import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import * as communityActions from '../actions/community'
//import * as projectActions from '../../projects/actions/project'


import PanelWidget from '../../../components/ui/PanelWidget'
import CommunityForm from '../components/CommunityForm'
// require('../../smartadmin/components/less/components.less');

class NewCommunity extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Community">
          	<CommunityForm addCommunityRequest={this.props.addCommunityRequest} />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.community.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...communityActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCommunity);

//export default NewCommunity
