import React from 'react'
import { Col, Clearfix, Panel } from 'react-bootstrap';

export default class PanelWidget extends React.Component{
	constructor(props){
    super(props);

  }

  static defaultProps = {
    panelHeader: "JUMAIN Vaccine Tracker"
  };

  componentDidMount () {
    
  }

  render () {
    const title = (
      <strong>{this.props.panelHeader}</strong>
    );

    return (
      <Panel collapsible defaultExpanded header={title} bsStyle="info">
        {this.props.children}
      </Panel>
    )
  }
}