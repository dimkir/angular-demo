

angular.module('app')
  .controller('mainCtrl', ['$scope',function($scope){
    
     $scope.name = 'Dimitry'; 
     
     $scope.users = users.results;
     
  }]);


