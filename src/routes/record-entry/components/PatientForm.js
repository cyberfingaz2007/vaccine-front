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

class PatientForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: "",
      sex: "select",
      dob: "",
      residence: "",
      vacStatus: "select",
      vacDate: "",
      description: "",
      project: "select",
      employee: ""
    };
    
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.handleVacStatusChange = this.handleVacStatusChange.bind(this);
    this.handleVacDateChange = this.handleVacDateChange.bind(this);

    this.handleResidenceChange = this.handleResidenceChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleEmpChange = this.handleEmpChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleFullNameChange(e) {
    this.setState({ fullName: e.target.value });
    //console.log(this.state);
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
    //console.log(this.state);
  }

  handleSexChange(e) {
    this.setState({ sex: e.target.value });
    //console.log(this.state);
  }

  handleVacStatusChange(e) {
    this.setState({ vacStatus: e.target.value });
    //console.log(this.state);
  }

  handleVacDateChange(e) {
    this.setState({ vacDate: e.target.value });
    //console.log(this.state);
  }

  handleResidenceChange(e) {
    this.setState({ residence: e.target.value });
    //console.log(this.state);
  }

  handleDOBChange(e) {
    this.setState({ dob: e.target.value });
    //console.log(this.state);
  }

  handleEmpChange(e) {
    this.setState({ employee: e.target.value });
    //console.log(this.state);
  }

  handleProjectChange(e) {
    this.setState({ project: e.target.value });
    //console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = {
      fullName: this.state.fullName,
      sex: this.state.sex,
      dob: this.state.dob,
      residence: this.state.residence,
      vacStatus: this.state.vacStatus,
      vacDate: this.state.vacDate,
      description: this.state.description,
      project: this.state.project,
      employee: this.state.employee
    }

    console.log(formData);
    //this.props.addSeriesRequest(formData);
    this.setState({
      fullName: "",
      sex: "select",
      dob: "",
      residence: "",
      vacStatus: "select",
      vacDate: "",
      description: "",
      project: "select",
      employee: ""
    });
    alert("Submitted...");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="patientForm">
      	<Row>
      		<Col md={6}>
		        <FieldGroup
		          id="fullName"
		          type="text"
		          label="Full Name"
		          placeholder="Enter Patient Name"
		          onChange={this.handleFullNameChange}
		          value={this.state.fullName}
		        />
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="dob"
		          type="text"
		          label="Date of Birth"
		          placeholder="Enter DOB"
		          onChange={this.handleDOBChange}
		          value={this.state.dob}
		        />
	        </Col>
	      </Row>
	      <Row>
	      	<Col md={12}>
		        <FieldGroup
		          id="residence"
		          type="text"
		          label="Residence"
		          placeholder="Enter Address"
		          onChange={this.handleResidenceChange}
		          value={this.state.residence}
		        />
	        </Col>
        </Row>
        <Row>
      		<Col md={6}>
		        <FormGroup controlId="sex">
		          <ControlLabel>Select Gender</ControlLabel>
		          <FormControl componentClass="select" placeholder="Select Gender" onChange={this.handleSexChange} value={this.state.sex}>
		            <option value="select">Select Sex</option>
		            <option value="male">Male</option>
		            <option value="female">Female</option>
		          </FormControl>
		        </FormGroup>
		      </Col>
		      <Col md={6}>
		        <FormGroup controlId="projects">
		          <ControlLabel>Select Project</ControlLabel>
		          <FormControl componentClass="select" placeholder="Select Project" onChange={this.handleProjectChange} value={this.state.project}>
		            <option value="select">Select Project</option>
		            {this.props.projects.map((project, i) => (<option key={i} value={project.id}>{project.projectName}</option>) )}
		          </FormControl>
		        </FormGroup>
		      </Col>
        </Row>
        <Row>
      		<Col md={6}>
		        <FormGroup controlId="vacStatus">
		          <ControlLabel>Select Status</ControlLabel>
		          <FormControl componentClass="select" placeholder="Select Status" onChange={this.handleVacStatusChange} value={this.state.vacStatus}>
		            <option value="select">Select Status</option>
		            <option value="done">Done</option>
		            <option value="yet-to-be-done">Yet To Be Done</option>
		            <option value="other-issues">Other Issues</option>
		          </FormControl>
		        </FormGroup>
		      </Col>
		      <Col md={6}>  
		        <FieldGroup
		          id="description"
		          type="text"
		          label="Description"
		          placeholder="Enter Issues Description"
		          onChange={this.handleDescriptionChange}
		          value={this.state.description}
		        />
		      </Col>
        </Row>
        <Row>
      		<Col md={6}>
		        <FieldGroup
		          id="vacDate"
		          type="text"
		          label="Vaccination Date"
		          placeholder="Select Vaccination Date"
		          onChange={this.handleVacDateChange}
		          value={this.state.vacDate}
		        />
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="employee"
		          type="text"
		          label="Registered By:"
		          placeholder="Enter Field Worker Name"
		          onChange={this.handleEmpChange}
		          value={this.state.employee}
		        />
		      </Col>
        </Row>
        <Button type="submit">
          Submit Patient
        </Button>
      </form>
    )
  }
}

export default PatientForm;