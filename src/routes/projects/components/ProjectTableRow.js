import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'

const ProjectTableRow = createReactClass({
  render() {
    let project = this.props.project
    return (
      <tr>
        <td>{project.id}</td>
        <td>{project.project_name}</td>
        <td>{project.community.community_name}</td>
        <td>{project.time_span}</td>
        <td>{project.budget}</td>
        <td>{project.num_of_field_workers}</td>
        <td>{project.project_strt_date}</td>
        <td>{project.project_status}</td>
      </tr>
    )
  }
});

export default ProjectTableRow;
