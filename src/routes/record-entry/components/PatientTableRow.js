import React from 'react';
import { Link } from 'react-router'
import createReactClass from 'create-react-class'

const PatientTableRow = createReactClass({
  render() {
    let patient = this.props.patient
    return (
      <tr>
        <td>{patient.id}</td>
        <td>{patient.unique_number}</td>
        <td>{patient.full_name}</td>
        <td>{patient.sex}</td>
        <td>{patient.date_of_birth}</td>
        <td>{patient.detail[0].vaccination_status}</td>
        <td>{patient.detail[0].vaccination_date}</td>
        <td>{patient.detail[0].employee_name}</td>
      </tr>
    )
  }
});

export default PatientTableRow;
