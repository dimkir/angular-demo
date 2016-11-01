(function() {
'use strict';

    angular
        .module('app')
        .filter('mySimpleFilter', mySimpleFilter);

    function mySimpleFilter() {
        return mySimpleFilterFilter;

        ////////////////

        function mySimpleFilterFilter(Params) {
            return Params;
        }
    }
})();
