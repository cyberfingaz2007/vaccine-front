import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'
import TopBannerRow from '../components/TopBannerRow'
import MainRow from '../components/MainRow'
// require('../../smartadmin/components/less/components.less');

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <TopBannerRow />
        <MainRow />
      </div>
    )
  }
}

