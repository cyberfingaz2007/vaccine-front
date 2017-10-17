// Request project list
export function projectListRequest() {
  console.log("Testing project list actions");
  return {
    type : 'FETCH_PROJECT_LIST_REQUEST',
  }
}

// Request project
export function projectRequest(data) {
  console.log("Testing single project actions");
  return {
    type : 'FETCH_PROJECT_REQUEST',
    data,
  }
}

// Request add project
export function addProjectRequest(data) {
  console.log("Testing add project actions");
  return {
    type : 'FETCH_PROJECT_ADD_REQUEST',
    data,
  }
}