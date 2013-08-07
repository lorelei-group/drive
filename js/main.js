angular.module('lorelei-drive', [
	'lorelei-drive-folder',
	'lorelei-drive-file',
])


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
