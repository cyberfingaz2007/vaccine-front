import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Col, Clearfix, Row, Panel } from 'react-bootstrap';

import * as reportsActions from '../actions/reports'

import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'
import FlotChart from '../../../components/graphs/flot/FlotChart'

const pieChartData = [
  {
    "label": "Series1",
    "data": 60
  },
  {
    "label": "Series2",
    "data": 27
  },
  {
    "label": "Series3",
    "data": 92
  }
]
export default class ProgressPieChart extends React.Component{
	constructor(props){
    super(props);

  }

  componentDidMount () {
    
  }

  render () {
    return (
      <PanelWidget panelHeader="Progress Pie Chart till Date">
        <span>this is the canvas for the Vaccination Date</span>
        <FlotChart data={pieChartData}
                               options={pieChartDemoOptions}/>
      </PanelWidget>
    )
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
  pieChartData: state.reports.progressPieTillDate,
  loading: state.reports.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...reportsActions},dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(ProgressPieChart);

//export default ProgressPieChart