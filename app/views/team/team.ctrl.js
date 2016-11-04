(function() {
'use strict';

    angular
        .module('app')
        .controller('teamCtrl', teamController);

    teamController.$inject = ['$scope', '$routeParams'];
    function teamController($scope, $routeParams) {
        var $ctrl = this;



        $scope.team = {
            name: sprintf('Team name [%s]', $routeParams.id)
        };

        
        

        activate();

        ////////////////

        function activate() { }
    }
})();