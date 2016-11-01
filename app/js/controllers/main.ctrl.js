(function(global){

'use strict';

var utils = global.utils;

angular.module('app')
  .controller('mainCtrl', ['$scope',function($scope){
    
     var vm = this;
     var ALL_USERS = users_100.results;
     $scope.name = 'Dimitry'; 
     $scope.users = [];


    //  $scope.users = users.results;

    
    //  $scope.users = ALL_USERS;

    vm.init = function(){

      vm.filterUsersByName(); // we need to run it in the beginning
    };
    

    $scope.sampleData = 'SampleData!!!';
    $scope.count = 8;

     $scope.onKeyUp = function(ev){
       console.log('On key up ' + $scope.name );
       console.log(ev);

       vm.filterUsersByName();
     };

     $scope.openModal = function(){

       console.log('Opening modal....' + new Date());
     };



     vm.filterUsersByName = function(){

       var users = [];

       var tokens = $scope.name.match(/\S+/g) || [];

       var tokensShorterThan = function(tokens, minTokenLength){
          var atLeastOneLong = false;
          tokens.forEach(function(tk){
              if ( tk.length >= minTokenLength ){
                atLeastOneLong = true;
              }

          });

          return !atLeastOneLong;
       };



       if ( tokens.length === 0 || tokensShorterThan(tokens, 2) ){
         $scope.users = ALL_USERS;
         return;
       }

        ALL_USERS.forEach(function(u){
            // console.log(u);
            var options = {
               matchingStrategy: utils.Strategies.All,
            };

            var s;
            if ( utils.containsSubstrings(u.name.first, tokens , options) ){
              users.push(u);
              s = sprintf('Name [%s] contains (YYY) all the tokens [%s]', u.name.first, tokens.toString());
            }
            else{
              s = sprintf('Name [%s] DOES NOT contain all of the tokens [%s]', u.name.first, tokens.toString() );
            }
            // console.debug(s);
        });


        $scope.users = users;

     };




     vm.init();
     
     
  }]);





})(window);


