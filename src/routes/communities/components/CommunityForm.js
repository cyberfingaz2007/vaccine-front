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

class CommunityForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      communityName: "",
      maleAbv10: undefined,
      femBtw10N15: undefined,
      childBel10: undefined,
      femAbv15: undefined
    };
    
    this.handleCommunityNameChange = this.handleCommunityNameChange.bind(this);
    this.handleMaleAbv10Change = this.handleMaleAbv10Change.bind(this);
    this.handleFemBtw10N15Change = this.handleFemBtw10N15Change.bind(this);
    this.handleChildBel10Change = this.handleChildBel10Change.bind(this);
    this.handleFemAbv15Change = this.handleFemAbv15Change.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleCommunityNameChange(e) {
    this.setState({ communityName: e.target.value });
    //console.log(this.state);
  }

  handleMaleAbv10Change(e) {
    this.setState({ maleAbv10: e.target.value });
    console.log(this.state);
  }

  handleFemBtw10N15Change(e) {
    this.setState({ femBtw10N15: e.target.value });
    //console.log(this.state);
  }

  handleChildBel10Change(e) {
    this.setState({ childBel10: e.target.value });
    //console.log(this.state);
  }

  handleFemAbv15Change(e) {
    this.setState({ femAbv15: e.target.value });
    //console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = {
      communityName: this.state.communityName,
      maleAbv10: this.state.maleAbv10,
      femBtw10N15: this.state.femBtw10N15,
      childBel10: this.state.childBel10,
      femAbv15: this.state.femAbv15
    }

    console.log(formData);
    //this.props.addSeriesRequest(formData);
    this.setState({
      communityName: "",
      maleAbv10: undefined,
      femBtw10N15: undefined,
      childBel10: undefined,
      femAbv15: undefined
    });
    alert("Submitted...");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="communityForm">
      	<Row>
      		<Col md={6}>
		        <FieldGroup
		          id="communityName"
		          type="text"
		          label="Community Name"
		          placeholder="Enter Community Name"
		          onChange={this.handleCommunityNameChange}
		          value={this.state.communityName}
		        />
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="maleAbv10"
		          type="integer"
		          label="Males Above 10"
		          placeholder="Enter Value"
		          onChange={this.handleMaleAbv10Change}
		          value={this.state.maleAbv10}
		        />
	        </Col>
	      </Row>

	      <Row>
      		<Col md={6}>
		        <FieldGroup
		          id="femBtw10N15"
		          type="integer"
		          label="Females Between 10 and 15"
		          placeholder="Enter Value"
		          onChange={this.handleFemBtw10N15Change}
		          value={this.state.femBtw10N15}
		        />
		      </Col>
		      <Col md={6}>
		        <FieldGroup
		          id="childBel10"
		          type="integer"
		          label="Children Below 10"
		          placeholder="Enter Value"
		          onChange={this.handleChildBel10Change}
		          value={this.state.childBel10}
		        />
	        </Col>
	      </Row>
        
        <Row>
		      <Col md={6}>  
		        <FieldGroup
		          id="femAbv15"
		          type="integer"
		          label="Female Above 15"
		          placeholder="Enter Value"
		          onChange={this.handleFemAbv15Change}
		          value={this.state.femAbv15}
		        />
		      </Col>
        </Row>
        
        <Button type="submit">
          Add Community
        </Button>
      </form>
    )
  }
}

export default CommunityForm;