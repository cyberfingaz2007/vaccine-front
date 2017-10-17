import React from 'react'
import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
/*import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'*/
// require('../../smartadmin/components/less/components.less');

export default class Patients extends React.Component {
  render() {
    return (
      <Row>
    		<Col md={12}>
          <PanelWidget panelHeader="Registered Patients">
            <Table striped bordered condensed hover responsive fill>
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Patient Code</th>
					        <th>Full Name</th>
					        <th>Sex</th>
					        <th>DOB</th>
					        <th>Vaccination Status</th>
					        <th>Vaccination Date</th>
					        <th>Registered By:</th>
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

