'use strict';

(function(){
	
angular.module('snApp').factory('githubFetch', ['$resource', githubFetch]);

function githubFetch($resource) {
    return $resource("https://api.github.com/search/repositories", {}, {
        get: {method: 'GET', cache: true, isArray: false},
    });
};

})();