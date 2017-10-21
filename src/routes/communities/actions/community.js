// Request community list
export function communityListRequest() {
  console.log("Testing community list actions");
  return {
    type : 'FETCH_COMMUNITY_LIST_REQUEST',
  }
}

// Request community
export function communityRequest(data) {
  console.log("Testing single community actions");
  return {
    type : 'FETCH_COMMUNITY_REQUEST',
    data,
  }
}

// Request add community
export function addCommunityRequest(data) {
  console.log("Testing add community actions");
  return {
    type : 'FETCH_COMMUNITY_ADD_REQUEST',
    data,
  }
}