(function(){
    "use strict";


    angular.module('app')
        .directive( 'myCircle', function($compile){
            return {
                link: function(scope,element,attribute,controller){
                    // var markup = "<input type='text' ng-model='sampleData'/> {{ sampleData }} <br/>";
                    var markup = "<div class='my-circle'><input type='text' ng-model='sampleData'/> {{ sampleData }} <br/></div>";
                    var compiled = $compile(markup)(scope);
                    angular.element(element).html(compiled);
                    // angular.element(element).html($compile(markup)(scope));
                    // angular.element(element).html(markup);
                        
                }
            };

        });

})();