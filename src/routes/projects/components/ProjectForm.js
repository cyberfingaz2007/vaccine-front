import React,{Component} from 'react';
import { Link } from 'react-router';
import { Button, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Col, Row, Tabs, Tab } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {' '}
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ProjectForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectName: "",
      description: "",
      community: "select",
      numOfFieldWorkers: "",
      timeSpan: "",
      budget: "",
      projectStrtDate: ""
    };
    
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleNumOfFieldWorkersChange = this.handleNumOfFieldWorkersChange.bind(this);
    this.handleTimeSpanChange = this.handleTimeSpanChange.bind(this);

    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleProjectStrtDateChange = this.handleProjectStrtDateChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleProjectNameChange(e) {
    this.setState({ projectName: e.target.value });
    //console.log(this.state);
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
    //console.log(this.state);
  }

  handleCommunityChange(e) {
    this.setState({ community: e.target.value });
    //console.log(this.state);
  }

  handleNumOfFieldWorkersChange(e) {
    this.setState({ numOfFieldWorkers: e.target.value });
    //console.log(this.state);
  }

  handleTimeSpanChange(e) {
    this.setState({ timeSpan: e.target.value });
    //console.log(this.state);
  }

  handleBudgetChange(e) {
    this.setState({ budget: e.target.value });
    //console.log(this.state);
  }

  handleProjectStrtDateChange(e) {
    this.setState({ projectStrtDate: e.target.value });
    //console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = {
      projectName: this.state.projectName,
      description: this.state.description,
      community: this.state.community,
      numOfFieldWorkers: this.state.numOfFieldWorkers,
      timeSpan: this.state.timeSpan,
      budget: this.state.budget,
      projectStrtDate: this.state.projectStrtDate
    }

    console.log(formData);
    //this.props.addSeriesRequest(formData);
    this.setState({
      projectName: "",
      description: "",
      community: "select",
      numOfFieldWorkers: "",
      timeSpan: "",
      budget: "",
      projectStrtDate: ""
    });
    alert("Submitted...");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="projectForm">
      	<Row>
      		<Col md={6}>
		        <FieldGroup
		          id="projectName"
		          type="text"
		          label="Project Name"
		          placeholder="Enter Project Name"
		          onChange={this.handleProjectNameChange}
		          value={this.state.fullName}
		        />
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="description"
		          type="text"
		          label="Description"
		          placeholder="Enter Project Description"
		          onChange={this.handleDescriptionChange}
		          value={this.state.description}
		        />
	        </Col>
	      </Row>
        <Row>
      		<Col md={6}>
		        <FormGroup controlId="community">
		          <ControlLabel>Select Community</ControlLabel>
		          <FormControl componentClass="select" placeholder="Select Community" onChange={this.handleCommunityChange} value={this.state.community}>
		            <option value="select">Select Community</option>
		            {this.props.communities.map((community, i) => (<option key={i} value={community.id}>{community.communityName}</option>) )}
		          </FormControl>
		        </FormGroup>
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="numOfFieldWorkers"
		          type="integer"
		          label="No. Of Field Workers"
		          placeholder="Enter Value"
		          onChange={this.handleNumOfFieldWorkersChange}
		          value={this.state.numOfFieldWorkers}
		        />
		      </Col>
        </Row>
        <Row>
      		<Col md={6}>
		        <FieldGroup
		          id="timeSpan"
		          type="integer"
		          label="Project Duration(in days)"
		          placeholder="Enter Value"
		          onChange={this.handleTimeSpanChange}
		          value={this.state.timeSpan}
		        />
		      </Col>
		      <Col md={6}>  
		        <FieldGroup
		          id="budget"
		          type="money"
		          label="Project Budget"
		          placeholder="Enter Value"
		          onChange={this.handleBudgetChange}
		          value={this.state.budget}
		        />
		      </Col>
        </Row>
        <Row>
      		<Col md={6}>
		        <FieldGroup
		          id="projectStrtDate"
		          type="date"
		          label="Project Start Date"
		          placeholder="Select Date"
		          onChange={this.handleProjectStrtDateChange}
		          value={this.state.projectStrtDate}
		        />
		      </Col>
        </Row>
        <Button type="submit">
          Submit Project
        </Button>
      </form>
    )
  }
}

export default ProjectForm;