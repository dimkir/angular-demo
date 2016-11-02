(function() {
    'use strict';

    angular
        .module('app')
        .directive('navbar', navbar);

    navbar.$inject = ['$http'];
    function navbar($http) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            // bindToController: true,
            // controller: NavbarController,
            // controllerAs: 'vm',
            templateUrl: 'features/navbar/navbar.html',
            link: link,
            replace: true,
            restrict: 'E',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NavbarController () {
         
    }
})();