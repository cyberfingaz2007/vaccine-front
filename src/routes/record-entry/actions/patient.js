// Request patient list
export function patientListRequest() {
  console.log("Testing patient list actions");
  return {
    type : 'FETCH_PATIENT_LIST_REQUEST',
  }
}

// Request patient
export function patientRequest(data) {
  console.log("Testing single patient actions");
  return {
    type : 'FETCH_PATIENT_REQUEST',
    data,
  }
}

// Request add patient
export function addPatientRequest(data) {
  console.log("Testing add patient actions");
  return {
    type : 'FETCH_PATIENT_ADD_REQUEST',
    data,
  }
}