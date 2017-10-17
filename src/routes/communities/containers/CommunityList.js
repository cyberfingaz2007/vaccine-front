import React from 'react'
import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
/*import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'*/
// require('../../smartadmin/components/less/components.less');

export default class CommunityList extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={12}>
          <PanelWidget panelHeader="Registered Communities">
            <Table striped bordered condensed hover responsive fill>
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Community Name</th>
					        <th>Male Pop Above10</th>
					        <th>Female Pop Btw 10 and 15</th>
					        <th>Children Below 10</th>
					        <th>Female Above 15</th>
					        <th>Project</th>
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
					      </tr>
					      <tr>
					        <td>2</td>
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
					      </tr>
					    </tbody>
					  </Table>
          </PanelWidget>
        </Col>
        
    	</Row>
    )
  }
}

