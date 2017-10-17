import React from 'react';
import { Link } from 'react-router'

const PatientTableRow = React.createClass({
  render() {
    let patient = this.props.patient
    return (
      <tr>
        <td>{patient.id}</td>
        <td>{patient.uniqueNumber}</td>
        <td>{patient.fullName}</td>
        <td>{patient.sex}</td>
        <td>{patient.dateOfBirth}</td>
        <td>{patient.detail.vaccinationStatus}</td>
        <td>{patient.detail.vaccinationDate}</td>
        <td>{patient.detail.employeeName}</td>
      </tr>
    )
  }
});

export default PatientTableRow;
