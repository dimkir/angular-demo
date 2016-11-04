(function() {
'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$scope'];
    function AppController($scope) {
        var vm = this;
        $scope.title = 'This is title';

        activate();

        ////////////////

        function activate() { }
    }
})();