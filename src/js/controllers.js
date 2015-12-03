var webctrl = angular.module('app.controllers', []);

webctrl.controller('dronesCtrl', function($scope) {
	function hideallscopes() {
		$scope.apply(function() {
			$scope.showFirstThing = false;
			$scope.showSecondThing = false;
			$scope.showThirdThing = false;
			$scope.showFourthThing = false;
			$scope.showFifthThing = false;
			$scope.showSixthThing = false;
		});
	}
	$scope.hideall = function() { hideallscopes() }
	$scope.handleCards = function(ngShow) {
		switch(ngShow) {
			case 0:
				$scope.apply(function() {
					$scope.showFirstThing = true;
				});
				break;
			case 1:
				$scope.apply(function() {
					$scope.showSecondThing = true;
				});
				break;
			case 2:
				$scope.apply(function() {
					$scope.showThirdThing = true;
				});
				break;
			case 3:
				$scope.apply(function() {
					$scope.showFourthThing = true;
				});
				
				break;
			case 4:
				$scope.apply(function() {
					$scope.showFifthThing = true;
				});
				break;
			case 5:
				$scope.apply(function() {
					$scope.showSixthThing = true;
				});
				break;
		}
	}

});