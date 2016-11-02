(function(){
  "use strict";

  angular.module('app')
    .directive('mySquare', function($compile){
      console.log('mySquare: inside directive function');
      
      return {
        restrict: 'EA',
        replace: true,
        template: '<div class="geom col-orange square">{{ name }}</div>',
        // template: "<input type='text' ng-model='sampleData' />{{ sampleData}} <br/>",
        link: function(scope, element, attrs, controller){
          // var markup = ;
          console.log('mySquare: inside link() function');

          // angular.element(element).html($compile(markup)(scope));
        }
      };
    });




})();

