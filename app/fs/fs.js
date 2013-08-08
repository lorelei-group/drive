angular.module('lorelei-drive-fs', [])

.constant('PATH', 'app/fs/')

.directive('fsNode', function(PATH) {
	return {
		restrict: 'A',
		templateUrl: PATH + 'node.html',
		scope: {
			node: '=model',
			tooltip: '@alt'
		},
		link: function(scope, element, attributes) {
			console.log('creating node :D');
		}
	};
})

.directive('folder', function(PATH) {
	return {
		restrict: 'E',
		templateUrl: PATH + 'folder.html',
		scope: {
			folder: '=model',
		},
		link: function(scope, element, attributes) {
			console.log('running folder', scope);
		}
	};
})

.directive('file', function(PATH) {
	return {
		restrict: 'E',
		templateUrl: PATH + 'file.html',
		scope: {
			file: '=model',
		},
		link: function(scope, element, attributes) {
			console.log('running file', scope);
		}
	};
})


.controller('BrowserCtrl', function BrowserCtrl($scope) {
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
});
