angular.module('lorelei-drive-fs', [])

.directive('fsNode', function() {
	return {
		restrict: 'A',
		templateUrl: 'app/fs/node.html',
		scope: {
			node: '=model',
			tooltip: '@alt'
		},
		link: function(scope, element, attributes) {
			console.log('creating node :D');
		}
	};
})

.directive('folder', function() {
	return {
		restrict: 'E',
		template: '<div x-fs-node model="folder" x-alt="{{ folder.files.length }} files"></div>',
		scope: {
			folder: '=model',
		},
		link: function(scope, element, attributes) {
			console.log('running folder', scope);
		}
	};
})


.directive('file', function() {
	return {
		restrict: 'E',
		template: '<div x-fs-node model="file"></div>',
		scope: {
			file: '=model',
		},
		link: function(scope, element, attributes) {
			console.log('running file', scope);
		}
	};
})
