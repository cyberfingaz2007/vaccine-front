import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';


import PanelWidget from '../../../components/ui/PanelWidget'
import TopDailyReportStrip from '../components/TopDailyReportStrip'
//import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

export default class DailyReports extends React.Component {
  render() {
    return (
      <TopDailyReportStrip />
    )
  }
}

