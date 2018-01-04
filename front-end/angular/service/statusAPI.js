app.factory("statusAPI", function ($http) {
	
	const urlStatus = "http://localhost:8080/ensino/rest/status";	

	function _getStatus(){
		return $http.get(urlStatus);
	}

	function _getStatusId(id){
		return $http.get(urlStatus + "/" + id);
	}

	function _putStatus(status){
		return $http.put(urlStatus, status);
	}

	return{
		getStatus: _putStatus,
		getStatusId: _getStatusId,
		putStatus: _putStatus
	}
})