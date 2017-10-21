// Request patient vacc for date
export function patVaccForDateRequest(data) {
  console.log("Testing patient vacc for date actions");
  return {
    type : 'FETCH_PATIENT_VAC_FOR_DATE_REQUEST',
    data,
  }
}

// Request progress vacc till date
export function progPieTillDateRequest(data) {
  console.log("Testing progress vacc till date actions");
  return {
    type : 'FETCH_PROGRESS_PIE_TILL_DATE_REQUEST',
    data,
  }
}

// Request total vacc
export function totVaccRequest(data = 1) {
  console.log("Testing total vaccinated actions");
  return {
    type : 'FETCH_TOTAL_VACC_REQUEST',
    data,
  }
}

// Request total Budget spent
export function totBudgetSpentRequest(data=1) {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_TOTAL_BUDGET_SPENT_REQUEST',
    data,
  }
}

// Request total Budget spent
export function totBudgetSpentWithDataRequest(data) {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_TOTAL_BUDGET_SPENT_WITH_DATA_REQUEST',
    data,
  }
}

// Request project time elapsed
export function projectTimeElapsedRequest(data) {
  console.log("Testing project time elapsed actions");
  return {
    type : 'FETCH_PROJ_TIME_ELAPSED_REQUEST',
    data,
  }
}

// Request 
export function allVaccForProjRequest() {
  console.log("Testing total vaccinated actions");
  return {
    type : 'FETCH_ALL_VACC_FOR_PROJECTS_REQUEST',
  }
}

// Request 
export function vaccForProjectsByDateRequest(data) {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_VACC_FOR_PROJ_BY_DATE_REQUEST',
    data,
  }
}

// Request
export function totVaccByProjectRequest(data=1) {
  console.log("Testing project time elapsed actions");
  return {
    type : 'FETCH_TOT_VACC_BY_PROJ_REQUEST',
    data,
  }
}