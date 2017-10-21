import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'

const CommunityTableRow = createReactClass({
  render() {
    let community = this.props.community
    return (
      <tr>
        <td>{community.id}</td>
        <td>{community.community_name}</td>
        <td>{community.male_abv10}</td>
        <td>{community.fem_btw10_n15}</td>
        <td>{community.child_bel10}</td>
        <td>{community.fem_abv15}</td>
      </tr>
    )
  }
});

export default CommunityTableRow;
