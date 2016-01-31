'use strict';

(function(){

angular.module('snApp').directive('navbar', [Navbar]);

function Navbar(){

	var title = 'SN AngularJS Template';

    return {
        restrict: 'A',
        templateUrl: 'tpl/navbar.html',
        link: function(scope, el, attrs) {
        	if (attrs.menuTitle) {
        		title = attrs.menuTitle
        	};
            scope.label = title;
        }
    };
};

})();