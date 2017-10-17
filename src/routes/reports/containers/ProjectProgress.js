import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'
import FirstProjectProgressStrip from '../components/FirstProjectProgressStrip'
// require('../../smartadmin/components/less/components.less');

export default class ProjectProgress extends React.Component {
  render() {
    return (
      <FirstProjectProgressStrip />
    )
  }
}

