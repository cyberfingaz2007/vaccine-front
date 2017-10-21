import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'

import { Col, Clearfix, Panel, Row, Table } from 'react-bootstrap';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader'

import * as communityActions from '../actions/community'
import CommunityTableRow from '../components/CommunityTableRow'

import PanelWidget from '../../../components/ui/PanelWidget'
import CommunityList from './CommunityList'
/*import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'*/
// require('../../smartadmin/components/less/components.less');

class Communities extends React.Component {
	constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.communityListRequest()

  }

  render() {
    return (
      <OverlayLoader 
        color={'red'} // default is white
        loader="ScaleLoader" // check below for more loaders
        text="Loading... Please wait!" 
        active={this.props.loading} 
        backgroundColor={'black'} // default is black
        opacity=".4" // default is .9  
      >
        <Row>
      		<Col md={12}>
            <PanelWidget panelHeader="Registered Communities">
              {this.props.communities ? <CommunityList communities={this.props.communities} /> : <div><p>There are no communities to show</p></div>}
            </PanelWidget>
          </Col>
          
      	</Row>
      </OverlayLoader>
    )
  }
}

const mapStateToProps = state => ({
  communities: state.community.dataList,
  loading: state.community.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...communityActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Communities);

//export default Communities