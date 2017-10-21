import {create} from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://vaccine-back/cloud/web/app_dev.php/api',
  headers: {
  	'Accept': 'application/json',
    'X-API-KEY': '123',
    'X-MARKS-THE-SPOT': 'yarrrrr',
    'client': 'my-react-app'
  },
  timeout: 30000
});

/////////////////////////////////////// Dashboard funtions ///////////////////////////////////////////////
export function fetchNumAllTotVacc() {
	var dataObj = api
								  .get('/NumAllTotVacc')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchNumberAllPatients() {
	var dataObj = api
								  .get('/NumAllPatient')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchNumOfComProjects() {
	var dataObj = api
								  .get('/NumCompProjects')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchNumOfProjects() {
	var dataObj = api
								  .get('/NumProjects')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchRecAddPatients() {
	var dataObj = api
								  .get('/RecAddPatients')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchProjectsCompStats() {
	var dataObj = api
								  .get('/ProjectsCompStats')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchProjectImpact() {
	var dataObj = api
								  .get('/ProjectImpact')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchProjectImpactWithData(projectId) {
	var dataObj = api
								  .get('/ProjectImpact/' + projectId)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

/////////////////////////////////////// End Dashboard funtions ////////////////////////////////////////////

/////////////////////////////////////// Patients funtions ///////////////////////////////////////////////

export function addPatient(data) {
	var dataObj = api
								  .post('/new-patient',
								  	data)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchAllPatients() {
	var dataObj = api
								  .get('/all-patients')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchSinglePatient(data) {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

/////////////////////////////////////// End Patients funtions ////////////////////////////////////////////

/////////////////////////////////////// Communities funtions ///////////////////////////////////////////////
export function addCommunity(data) {
	var dataObj = api
								  .post('/new-community',
								  	data)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchAllCommunities() {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchSingleCommunity(data) {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}


/////////////////////////////////////// End Communities funtions ////////////////////////////////////////////

/////////////////////////////////////// Projects funtions ///////////////////////////////////////////////
export function addProject(data) {
	var dataObj = api
								  .post('/new-project',
								  	data)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchAllProjects() {
	var dataObj = api
								  .get('/all-projects')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchSingleProject(data) {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}
/////////////////////////////////////// End Projects funtions ////////////////////////////////////////////

/////////////////////////////////////// Reports funtions ///////////////////////////////////////////////
export function fetchAllVaccForProjects() {
	var dataObj = api
								  .get('/AllNumVaccByProj')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchVaccForProjectsByDate(dateVal) {
	var dataObj = api
								  .get('/NumVaccByProjByDate/' + dateVal)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchTotVaccByProject(projectId = 1) {
	var dataObj = api
								  .get('/TotVacc/' + projectId)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchTotBudgetSpent(projectId = 1) {
	var dataObj = api
								  .get('/TotBudgetSpnt/' + projectId)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}


export function fetchPatVaccForDate() {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchProgPieTillDate() {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchTotVacc() {
	var dataObj = api
								  .get('/all-communities')
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}

export function fetchProjectTimeElapsed(projectId) {
	var dataObj = api
								  .get('/TotTimeUsed/' + projectId)
								  .then((response) => {
								  	//response.data[0].commit.message
								  	console.log(response);
								  	return response;
								  })
								  .then((error) => {
								  	console.log(error)
								  	return error;
								  });

  return dataObj;
}
/////////////////////////////////////// End Reports funtions ////////////////////////////////////////////

