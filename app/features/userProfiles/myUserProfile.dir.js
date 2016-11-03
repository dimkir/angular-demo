(function () {
    "use strict";


    angular.module('app')
        .directive('myUserProfile', function ($compile) {
            return {
                scope: {
                    user: '=',
                    onUserClicked: '&',
                },

                link: function (s, e, a, c) {
                    s.robohash = function (hash) {
                        console.log(hash);
                        return sprintf("https://robohash.org/%s.png?set=set3&size=150x150", hash);
                    };
                },

                // template: '<div class="my-circle"></div>',
                templateUrl: 'features/userProfiles/myUserProfile.html'

            };
        });
})();