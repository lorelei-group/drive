angular.module('lorelei-drive', [
	'lorelei-drive-fs'
])


.controller('MasterCtrl', function($scope) {
	$scope.loaded = true;
})


.controller('ViewportCtrl', function($scope) {
	$scope.folders = [{
		id: 'asdfasfarjlkajg',
		name: 'Cosa',
		icon: 'http://www.grupogestiona.com/sites/default/files/u1/folder-icon.png',
		files: [ 'asfdasljflaskf', 'ksdfjalfkwe', 'asdkfaljfe' ]
	}];

	$scope.files = [{
		id: 'klajfeslkfj',
		name: 'Some Document.txt',
		icon: 'http://www.oceanwide-expeditions.com/assets/img/icon_file.jpg',
		size: 45643,
	}];
})


.controller('SidebarCtrl', function($scope) {
})


.controller('HeaderCtrl', function($scope) {
})


.controller('FooterCtrl', function($scope) {
});
