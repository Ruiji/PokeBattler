(function() {
	var app = angular.module('battle-directives', []);

	app.directive('battleDescription', function() {
		return {
			restrict : 'E',
			templateUrl : 'battle-description.html'
		};
	});

	app.directive('battleTabs', function() {
		return {
			restrict : 'E',
			templateUrl : 'battle-tabs.html',
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
		};
	});

	app.directive('battleGallery', function() {
		return {
			restrict : 'E',
			templateUrl: 'battle-gallery.html',
			controller: function() {
				this.current = 0;
        		this.setCurrent = function(imageNumber){
          			this.current = imageNumber || 0;
        		};
      		},
      		controllerAs: 'gallery'
		};
	});

	app.directive('battleMoves', function() {
		return {
			restrict: 'E',
			templateUrl: 'battle-moves.html'
		}
	});

	app.directive('battleSelect', function() {
		return{
			restrict : 'E',
			templateUrl : 'battle-select.html'
		}
	});

	app.directive('battlePreview', function() {
		return{
			restrict : 'E',
			templateUrl : 'battle-preview.html'
		}
	});

}());