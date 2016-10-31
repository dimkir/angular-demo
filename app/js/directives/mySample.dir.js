angular.module('app')
  .directive('mySample', function($compile){
    console.log('inside directive function');
    
    return {
      restrict: 'EA',
      link: function(scope, element, attrs, controller){
         var markup = "<input type='text' ng-model='sampleData' />{{ sampleData}} <br/>";
         angular.element(element).html($compile(markup)(scope));
      }
    };
  });