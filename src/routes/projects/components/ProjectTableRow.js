import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'
import moment from 'moment';

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
        <td>{moment(project.project_strt_date).format("DD-MM-YYYY")}</td>
        <td>{project.project_status}</td>
      </tr>
    )
  }
});

export default ProjectTableRow;
