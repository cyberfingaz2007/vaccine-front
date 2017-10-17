import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'

const CommunityTableRow = createReactClass({
  render() {
    let community = this.props.community
    return (
      <tr>
        <td>{community.id}</td>
        <td>{community.communityName}</td>
        <td>{community.maleAbv10}</td>
        <td>{community.femBtw10N15}</td>
        <td>{community.childBel10}</td>
        <td>{community.femAbv15}</td>
        <td>{community.project.projectName}</td>
      </tr>
    )
  }
});

export default CommunityTableRow;
