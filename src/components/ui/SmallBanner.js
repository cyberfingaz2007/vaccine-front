import React from 'react'
import { Col, Clearfix, Panel } from 'react-bootstrap';

export default class SmallBanner extends React.Component{
	constructor(props){
    super(props);

  }

  static defaultProps = {
    classNoms: "st-red",
    iClassNoms: "fa fa-check-square-o"
  };

  componentDidMount () {
    
  }

  render () {
    return (
    	<Col sm={6} md={3}>
    		<div className="sm-st clearfix">
          <span className={this.props.classNoms}><i className={this.props.iClassNoms}></i></span>
          <div className="sm-st-info">
              {this.props.children}
          </div>
        </div>
    	</Col>
    )
  }
}