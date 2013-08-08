angular.module('lorelei-drive', [
	'lorelei-drive-fs'
])

.config(function($routeProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider

		.when('/browse/:folder', {
			templateUrl: 'app/fs/browser.html',
			controller: 'BrowserCtrl'
		})

		.otherwise({redirectTo: '/browse/' });
})


.controller('MasterCtrl', function($scope) {
	$scope.loaded = true;
})


.controller('SidebarCtrl', function($scope) {
})


.controller('HeaderCtrl', function($scope) {
})


.controller('FooterCtrl', function($scope) {
});
