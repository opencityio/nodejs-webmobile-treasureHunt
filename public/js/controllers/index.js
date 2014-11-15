app.controller('indexController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
	var sessionID = $routeParams.sessionID;

	$scope.start = function(){
		var teamName = $scope.teamName;

		// Register team/participent with api, and load questions

		$location.url('/'+sessionID+'/question/1');
	}
}]);