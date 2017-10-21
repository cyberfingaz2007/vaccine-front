import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import * as reportsActions from '../actions/reports'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

import MorrisGraph from '../../../components/graphs/morris/MorrisGraph'

const donutChartData = [
  {
    "value":70,
    "label":"UnSpent"
  },
  {
    "value":15,
    "label":"Spent"
  }
]

class TotBudgetPieChart extends React.Component{
	constructor(props){
    super(props);
    this.state = {};

    this.handleProjectChange = this.handleProjectChange.bind(this);

  }

  componentDidMount () {
    this.props.totBudgetSpentRequest();
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    this.props.totBudgetSpentRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Total Budget Spent">
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Project</ControlLabel>
          <FormControl componentClass="select" placeholder="Select Project" onChange={this.handleProjectChange} value={this.state.project}>
            <option value="select">Select Project</option>
            {this.props.projects.map((project, i) => (<option key={i} value={project.id}>{project.project_name}</option>) )}
          </FormControl>
        </FormGroup>
        <MorrisGraph data={this.props.totBudgetSpent}
                     type="donut"
                     formater={this._formaterDemo}
        />
      </PanelWidget>
    )
  }

  _barColorsDemo (row, series, type) {
    if (type === 'bar') {
      var red = Math.ceil(150 * row.y / 8);
      return 'rgb(' + red + ',0,0)';
    } else {
      return '#000';
    }
  }
  _formaterDemo (x) {
    return x + "%"
  }
}

const pieChartDemoOptions = {
  series: {
    pie: {
      show: true,
      innerRadius: 0.5,
      radius: 1,
      label: {
        show: false,
        radius: 2 / 3,
        formatter: function (label, series) {
          return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
        },
        threshold: 0.1
      }
    }
  },
  legend: {
    show: true,
    noColumns: 1, // number of colums in legend table
    labelFormatter: null, // fn: string -> string
    labelBoxBorderColor: "#000", // border color for the little label boxes
    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
    position: "ne", // position of default legend container within plot
    margin: [5, 10], // distance from grid edge to default legend container within plot
    backgroundColor: "#efefef", // null means auto-detect
    backgroundOpacity: 1 // set to 0 to avoid background
  },
  grid: {
    hoverable: true,
    clickable: true
  }
};

const mapStateToProps = state => ({
  totBudgetSpent: state.reports.totBudgetSpent,
  projects: state.project.dataList,
  loading: state.reports.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...reportsActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TotBudgetPieChart);

//export default TotBudgetPieChart