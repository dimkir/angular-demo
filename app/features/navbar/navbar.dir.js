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

            scope.brand = {
                name: 'ACME Inc'
            };

            scope.teams = [
                 { id : 1, name : 'Team 1' },
                 { id : 2, name : 'Team 2' },
                 { id : 3, name : 'Team 3' },
                 { id : 4, name : 'Team 4' },
            ];

            // scope.isCollapsed = true;

            scope.$on('$routeChangeSuccess', function(){
                console.info('navbar.dir:   $routeChangeSucess, changing state of isCollapsed to true');
                scope.isCollapsed = true;

            });
        }
    }
    /* @ngInject */
    function NavbarController () {
         
    }
})();