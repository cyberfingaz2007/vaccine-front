import React from 'react'
import { Col, Clearfix, Panel, Row } from 'react-bootstrap';

import PanelWidget from '../../../components/ui/PanelWidget'
import TopBannerRow from './TopBannerRow'
import MainRow from './MainRow'
//import SecondRow from './SecondRow'
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

