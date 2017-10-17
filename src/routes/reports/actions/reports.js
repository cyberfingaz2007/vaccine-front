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
export function totVaccRequest() {
  console.log("Testing total vaccinated actions");
  return {
    type : 'FETCH_TOTAL_VACC_REQUEST',
  }
}

// Request total Budget spent
export function totBudgetSpentRequest() {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_TOTAL_BUDGET_SPENT_REQUEST',
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