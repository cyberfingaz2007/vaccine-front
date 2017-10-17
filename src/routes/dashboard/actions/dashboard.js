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
export function totVaccNumRequest(data) {
  console.log("Testing total vaccinated num actions");
  return {
    type : 'FETCH_TOTAL_VACC_NUM_REQUEST',
    data,
  }
}

// Request total Budget spent
export function totBudgetSpentRequest(data) {
  console.log("Testing total Budget spent actions");
  return {
    type : 'FETCH_BUDGET_SPENT_REQUEST',
    data,
  }
}

// Request project time elapsed
export function projectTimeElapsedRequest(data) {
  console.log("Testing project time elapsed actions");
  return {
    type : 'FETCH_TIME_ELAPSED_REQUEST',
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