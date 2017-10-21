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

export function fetchTotBudgetSpent() {
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

export function fetchProjectTimeElapsed() {
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