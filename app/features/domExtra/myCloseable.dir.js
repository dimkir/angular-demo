(function() {
    'use strict';

    angular
        .module('app')
        .directive('myCloseable', myCloseable);

    myCloseable.$inject = ['$compile'];
    function myCloseable($compile) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            // bindToController: true,
            // controller: ControllerController,
            // controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {

            // what can we do here?

            // how to add extra items to the element?
            angular.element(element).wrap("<div class='my-thick-border'></div>");
        }
    }
    /* @ngInject */
    function ControllerController () {
        
    }
})();