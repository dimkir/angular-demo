
angular.module('app', ['ui.bootstrap', 'ngRoute' ]).run(function(){
    console.log('Angular module app was run.');
})
.config(function($routeProvider){

    $routeProvider
    .when('/main', {
      templateUrl : 'views/main/main.html',
      controller  : 'mainCtrl'
    })
    .when('/team/:id', {
      templateUrl: 'views/team/team.html',
      controller : 'teamCtrl'
    })
    

    
    .otherwise({
      redirectTo: '/main'
    })
    
    ;
})
;
