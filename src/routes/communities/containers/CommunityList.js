import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';

import * as communityActions from '../actions/community'
import CommunityTableRow from '../components/CommunityTableRow'

import PanelWidget from '../../../components/ui/PanelWidget'
/*import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'*/
// require('../../smartadmin/components/less/components.less');

class CommunityList extends React.Component {
	constructor(props){
    super(props);
  }

  render() {
    if (!this.props.communities) {
      return (
        <div><p>There are no communities to show</p></div>
      );
    } else {
      return (
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
  		    	{this.props.communities.map((community, i)=>(<CommunityTableRow key={i} community={community} />))}
  		    </tbody>
  		  </Table>
      )
    }
  }
}

export default CommunityList