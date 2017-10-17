import React from 'react';
import { Link } from 'react-router'

const ProjectTableRow = React.createClass({
  render() {
    let project = this.props.project
    return (
      <tr>
        <td>{project.id}</td>
        <td>{project.projectName}</td>
        <td>{project.community.communityName}</td>
        <td>{project.timeSpan}</td>
        <td>{project.budget}</td>
        <td>{project.numOfFieldWorkers}</td>
        <td>{project.projectStrtDate}</td>
        <td>{project.projectStatus}</td>
      </tr>
    )
  }
});

export default ProjectTableRow;
