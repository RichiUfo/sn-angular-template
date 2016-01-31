'use strict';
(function(){
    
angular.module('snApp').controller('RequestCtrl', ['$scope', 'githubFetch', RequestCtrl]);

function RequestCtrl($scope, githubFetch, ArrayHelper) {
	$scope.q = '';
	$scope.repos_rows = [];
	$scope.total = 0;
	console.log('RequestCtrl');

	$scope.searchRepo = function(q) {
		if (q.length > 3) {
			githubFetch.get({q:q}, function(data){
				$scope.repos_rows = data.items;
				$scope.total = data.total_count;
				console.log($scope.repos_rows);
			});
		} else {
			$scope.repos_rows = [];
			$scope.total = 0;
		}
	}
}

})();

