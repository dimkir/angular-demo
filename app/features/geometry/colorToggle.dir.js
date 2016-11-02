(function() {
    'use strict';

    angular
        .module('app')
        .directive('geomColorToggle', geomColorToggle);

    geomColorToggle.$inject = ['$http'];
    function geomColorToggle($http) {
        // Usage:
        //
        // Creates:
        //

        var colors = [
            ''
        ];

        var directive = {
            bindToController: true,
            controller: GeomColorToggleController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        
        
        function link(scope, element, attrs) {

            element.on('click', function(){
                debugger;
                var lastRemoved = element.removeClassPrefix('col-');

                element.addClass(getNextColor(lastRemoved));
                console.debug('Clicked on geomColorToggle directive element');
            });

            element.addClass('pointer');
        }
    }
    /* @ngInject */
    function GeomColorToggleController () {
        
    }


    function getNextColor(color){
        var COLORS = [
            'col-orange',
            'col-red',
            'col-green'
        ];

        if ( undefined === color ){
            return COLORS[0];
        }

        var nextIdx = 0;
        COLORS.forEach(function(c, i){
            if ( c === color ){
                nextIdx = i + 1;
            }
        });

        nextIdx %= COLORS.length;

        return COLORS[nextIdx];

    }
})();