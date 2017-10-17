import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'
import ProjectForm from '../components/ProjectForm'

// require('../../smartadmin/components/less/components.less');

const communities = [
	{
		"id": 1,
		"communityName": "comm"
	},
	{
		"id": 2,
		"communityName": "comm1"
	},
	{
		"id": 3,
		"communityName": "comm2"
	},
	{
		"id": 4,
		"communityName": "comm3"
	}
];

export default class NewProject extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={8}>
          <PanelWidget panelHeader="Register new Project">
          	<ProjectForm communities={communities} />
          </PanelWidget>
        </Col>
    	</Row>
    )
  }
}

