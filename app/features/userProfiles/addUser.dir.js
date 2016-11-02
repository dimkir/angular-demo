(function() {
    'use strict';

    angular
        .module('app')
        .directive('addUser', addUser);

    addUser.$inject = ['$http'];
    function addUser($http) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            // bindToController: true,
            // controller: AddUserController,
            // controllerAs: 'vm',
            link: link,
            restrict: 'E',
            replace: true,
            templateUrl : 'features/userProfiles/addUser.html',
            scope: {
                onAdd : '&'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
            
        }
    }
    /* @ngInject */
    function AddUserController () {
        
    }
})();