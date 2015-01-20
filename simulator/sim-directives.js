(function() {
	var app = angular.module('simulator-directives', []);

	app.directive('simulatorTurns', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-turns.html'
		}
	});

	app.directive('simulatorFirst', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-first.html'
		}
	});

	app.directive('simulatorSecond', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-second.html'
		}
	});

	app.directive('simulatorTabs', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-tabs.html',
			controller : function() {
				this.tab = 1;

				this.isSet = function(checkTab) {
					return this.tab == checkTab;
				};

				this.setTab = function(activeTab) {
					this.tab = activeTab;
				};
			},
			controllerAs : 'tab'
		}
	});

	app.directive('simulatorMoves', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-moves.html'
		}
	});

	app.directive('simulatorMessages', function() {
		return { 
			restrict: 'E',
			templateUrl : 'simulator-messages.html'
		}
	});
}());