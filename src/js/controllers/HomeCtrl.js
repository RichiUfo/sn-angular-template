'use strict';
(function(){
    
angular.module('snApp').controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);

function HomeCtrl($scope,location) {
	console.log('HomeCtrl');
}

})();

