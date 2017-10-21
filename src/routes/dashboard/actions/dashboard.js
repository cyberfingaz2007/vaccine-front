// Request  vacc graph
export function vaccForDateRequest(data) {
  console.log("Testing vacc graph data actions");
  return {
    type : 'FETCH_VAC_GRAPH_DATA_REQUEST',
    data,
  }
}

// Request recently added
export function recentlyAddedRequest() {
  console.log("Testing recently added actions");
  return {
    type : 'FETCH_RECENTLY_ADDED_REQUEST',
  }
}

// Request total vacc num
export function totVaccNumRequest() {
  console.log("Testing total vaccinated num actions");
  return {
    type : 'FETCH_TOTAL_VACC_NUM_REQUEST',
  }
}

// Request 
export function numAllPatientsRequest() {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_NUM_ALL_PATIENT_REQUEST',
  }
}

// Request 
export function numCompProjRequest() {
  console.log("Testing COMP PROJ actions");
  return {
    type : 'FETCH_NUM_OF_COMP_PROJ_REQUEST',
  }
}

// Request 
export function compProjStatsRequest() {
  console.log("Testing COMP PROJ actions");
  return {
    type : 'FETCH_COMP_PROJ_STATUS_REQUEST',
  }
}

// Request project impact
export function projectImpactRequest() {
  console.log("Testing project time elapsed actions");
  return {
    type : 'FETCH_PROJ_IMPACT_REQUEST',
  }
}

// Request project impact
export function projectImpactWithDataRequest(data) {
  console.log("HE");
  return {
    type : 'FETCH_PROJ_IMPACT_WITH_DATA_REQUEST',
    data,
  }
}

// Request num of projects
export function numOfProjectRequest() {
  console.log("Testing num of projects actions");
  return {
    type : 'FETCH_NUM_OF_PROJECTS_REQUEST',
  }
}