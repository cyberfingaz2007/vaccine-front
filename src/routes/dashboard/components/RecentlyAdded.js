import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ListGroup, ListGroupItem, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import * as dashActions from '../actions/dashboard'

import Select2 from '../../../components/forms/inputs/Select2'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'
import FlotChart from '../../../components/graphs/flot/FlotChart'

const listData = [
  {
    "full_name": "Series1",
    "detail": [
      {
        "vaccination_date": "2017-10-09"
      }
    ]
  },
  {
    "full_name": "Series2",
    "detail": [
      {
        "vaccination_date": "2017-10-09"
      }
    ]
  },
  {
    "full_name": "Series3",
    "detail": [
      {
        "vaccination_date": "2017-10-09"
      }
    ]
  }
]
class RecentlyAdded extends React.Component{
	constructor(props){
    super(props);
    this.state = {};

    this.handleProjectChange = this.handleProjectChange.bind(this);

  }

  componentDidMount () {
    
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    this.props.progPieTillDateRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Recently Added Patients">
        <ListGroup fill>
          {listData.map((listItm, i)=>(<ListGroupItem key={i}>{listItm.full_name} vaccinated on {listItm.detail[0].vaccination_date}</ListGroupItem>))}
        </ListGroup>
      </PanelWidget>
    )
  }
}




const mapStateToProps = state => ({
  pieChartData: state.reports.progressPieTillDate,
  projects: state.project.dataList,
  loading: state.reports.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...dashActions},dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(RecentlyAdded);

export default RecentlyAdded