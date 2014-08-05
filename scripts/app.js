'use strict';

var app =angular.module('GDGStudentHackathon', ['ngRoute','timer','google-maps']);

app.config(['$routeProvider', function ($routeProvider) {
				 $routeProvider
					.when('/', {
						templateUrl: 'views/main.html',
						controller: 'IndexController'
					})
					.when('/topic', {
						templateUrl: 'views/topic.html',
						controller: 'TopicController'
					})
					.when('/info', {
						templateUrl: 'views/info.html',
						controller: 'InfoController'
					})
					.when('/submit', {
						templateUrl: 'views/submit.html',
						controller: 'SubmitController'
					});
			 }]);

app.controller('IndexController', ['$scope','$rootScope','$location', 
	function ($scope, $rootScope, $location) {
		$rootScope.location = $location.path();
}]);

app.controller('TopicController', ['$scope','$rootScope','$location', 
	function ($scope, $rootScope, $location) {
		$rootScope.location = $location.path();
}]);

app.controller('InfoController', ['$scope','$rootScope','$location', 
	function ($scope, $rootScope, $location) {
		$rootScope.location = $location.path();

		$scope.map = {
			center: {
				latitude: 37.495419,
				longitude: 127.038849
			},
			zoom: 15
		};

		$scope.marker = {
			coords: {
				latitude: 37.495419,
				longitude: 127.038849
			},
			id: 1
		};
}]);

app.controller('SubmitController', ['$scope','$rootScope','$location', 
	function ($scope, $rootScope, $location) {
		$rootScope.location = $location.path();
}]);