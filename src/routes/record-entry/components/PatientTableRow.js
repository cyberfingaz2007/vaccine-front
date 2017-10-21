import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'
import moment from 'moment';

const PatientTableRow = createReactClass({
  render() {
    let patient = this.props.patient
    return (
      <tr>
        <td>{patient.id}</td>
        <td>{patient.unique_number}</td>
        <td>{patient.full_name}</td>
        <td>{patient.sex}</td>
        <td>{moment(patient.date_of_birth).format("DD-MM-YYYY")}</td>
        <td>{patient.detail[0].vaccination_status}</td>
        <td>{moment(patient.detail[0].vaccination_date).format("DD-MM-YYYY")}</td>
        <td>{patient.detail[0].employee_name}</td>
      </tr>
    )
  }
});

export default PatientTableRow;
