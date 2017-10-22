import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router'
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab, Clearfix, Panel } from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import * as reportsActions from '../actions/reports'

//import Select2 from '../../../components/forms/inputs/Select2'
import SmallBanner from '../../../components/ui/SmallBanner'
import PanelWidget from '../../../components/ui/PanelWidget'

import ChartJsGraph from '../../../components/graphs/chartjs/ChartJsGraph'

const statusChartData = {
  "labels": ["Project 0", "Project 1", "Project 2", "Project 3", "Project 4"],
  "datasets": [
    {
      "label": "My First dataset",
      "fillColor": "rgba(220,220,220,0.5)",
      "strokeColor": "rgba(220,220,220,0.8)",
      "highlightFill": "rgba(220,220,220,0.75)",
      "highlightStroke": "rgba(220,220,220,1)",
      "data": [65, 59, 80, 81, 56]
    }
  ]
}
class PatientsVaccinatedChart extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      startDate: moment(),
      isOpen: false,
    };

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);

  }

  componentWillMount () {
    this.props.allVaccForProjRequest()
    console.log("what hey");
  }

  handleChange (date) {
    this.setState({startDate: date})
    this.toggleCalendar()
    this.props.vaccForProjectsByDateRequest(moment(date).format("YYYY-MM-DD"));
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    this.props.vaccForProjectsByDateRequest(e.target.value);
    //console.log(this.state);
  }

  render () {
    return (
      <PanelWidget panelHeader="Patients Vaccinated for Date">
        <div>
            <button
                className="example-custom-input"
                onClick={this.toggleCalendar}>
                {this.state.startDate.format("DD-MM-YYYY")}
            </button>
            {
                this.state.isOpen && (
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        withPortal
                        inline />
                )
            }
        </div>
        <ChartJsGraph type="bar" data={this.props.vaccDataForProjects}/>
      </PanelWidget>
    )
  }
}


const mapStateToProps = state => ({
  vaccDataForProjects: state.reports.vaccDataForProjects,
  projects: state.project.dataList,
  loading: state.reports.isFetching
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...reportsActions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PatientsVaccinatedChart);

//export default PatientsVaccinatedChart