angular.module('lorelei-drive', [])


.directive('folder', function() {
	return {
		restrict: 'A',
		template: '<button>CLICKME</button>',
		link: function link(scope, element, attributes) {
			console.log('running folder');
		},
		compile: function compile(tElement, tAttrs) {
			console.log('compiling folder');
			return function postLink(scope, iElement, iAttrs) {
				console.log('postlink folder');
			}
		}
	};
})


.directive('file', function() {
	return {
		restrict: 'E',
		template: '<button>CLICKME</button>',
		link: function link(scope, element, attributes) {
			console.log('running file');
		},
		compile: function compile(tElement, tAttrs) {
			console.log('compiling file');
			return function postLink(scope, iElement, iAttrs) {
				console.log('postlink file');
			}
		}
	};
})


.controller('MasterCtrl', function($scope) {
	$scope.loaded = true;
})


.controller('ViewportCtrl', function($scope) {
	$scope.folders = [{
		id: 'asdfasfarjlkajg',
		name: 'cosa',
		files: [ 'asfdasljflaskf', 'ksdfjalfkwe', 'asdkfaljfe' ]
	}];

	$scope.files = [{
		id: 'klajfeslkfj',
		name: 'testing',
		size: 45643,
	}];
})


.controller('SidebarCtrl', function($scope) {
})


.controller('HeaderCtrl', function($scope) {
})


.controller('FooterCtrl', function($scope) {
});
