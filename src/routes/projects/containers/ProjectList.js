import React from 'react'
import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'

/*import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'*/
// require('../../smartadmin/components/less/components.less');

export default class ProjectList extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={12}>
          <PanelWidget panelHeader="List of Projects">
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
					      <tr>
					        <td>1</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					      </tr>
					      <tr>
					        <td>2</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					      </tr>
					      <tr>
					        <td>3</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					        <td>Table cell</td>
					      </tr>
					    </tbody>
					  </Table>
          </PanelWidget>
        </Col>
        
    	</Row>
    )
  }
}

