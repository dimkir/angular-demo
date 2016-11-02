(function(){
    "use strict";


    angular.module('app')
        .directive('myUserProfile', function($compile){
            return {
                scope: {
                    user: '='
                },

                // template: '<div class="my-circle"></div>',
                templateUrl: 'features/userProfiles/myUserProfile.html'

            };
        });
})();