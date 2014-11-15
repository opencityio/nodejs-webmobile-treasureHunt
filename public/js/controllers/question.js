app.controller('questionController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
	var questionID = $routeParams.id,
		sessionID = $routeParams.sessionID;

	$scope.question = {
		question: 'How many spires are on the cathedral?',
		choices: [
			'12',
			'5',
			'4',
			'10'
		],
		correct: 2,
		minTime: 0,
		hint: 'I don\t actually know the answer as I\'ve been stuck in here all day so pick option 2'
	};

	$scope.showHint = false;

	$scope.selectChoice = function(choice) {
		var question = $scope.question;

		if(question.choices[question.correct] == choice) {
			// Correctly answered
			$location.url('/'+sessionID+'/complete');
		} else {
			// Incorrectly answered
			$scope.message = 'Incorrect! Try again!';
		}
	}


}]);