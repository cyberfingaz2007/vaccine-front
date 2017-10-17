import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
import CommunityForm from '../components/CommunityForm'
// require('../../smartadmin/components/less/components.less');

export default class NewCommunity extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Community">
          	<CommunityForm />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}

