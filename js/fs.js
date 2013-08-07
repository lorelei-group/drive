angular.module('lorelei-drive-fs', [])

.directive('fsNode', function() {
	return {
		template:
			'<div class="fs-node">' +
				'<img src="{{ node.icon }}">' +
				'<span ng-bind="node.name"></span>'
			'</div>',
		link: function(scope, element, attributes) {
			console.log('creating node :D');
		}
	};
});

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
