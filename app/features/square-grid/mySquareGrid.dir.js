angular.module('app')
  .directive('mySquareGrid', function($compile){
    console.log('mySquareGrid: inside directive function');
    
    return {
      restrict: 'EA',

      scope: {
        count : '=', // this "pipe"-connects to the variable of that name (links references so to speak)
        name  : '='
      },

      replace: true,

      link: function(scope, element, attrs, controller){
        console.log('mySquareGrid: inside link() function');
        //  var markup = "<input type='text' ng-model='sampleData' />{{ sampleData}} <br/>";

        console.log(sprintf('The value of the scope.count = %s', scope.count));
         var markup = "<div class='my-square-grid'>";

         var num = scope.count || 4;
         for(var i = 0; i < num ; i++){
           markup += '<my-square></my-square>';
          // markup += sprintf('<figure>%d {{ name }}</figure>', i);
         }

         markup += "</div>";
        //  angular.element(element).html(markup);
         console.info('Markup before compilation');
         console.info(markup);
         angular.element(element).html($compile(markup)(scope));
      }
    };
  });