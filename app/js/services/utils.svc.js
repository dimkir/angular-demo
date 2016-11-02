(function () {
    'use strict';

    angular
        .module('app')
        .service('utils', utilsService);

    utilsService.$inject = ['$http'];
    function utilsService($http) {
        // this.exposedFn = exposedFn;

        // ////////////////

        // function exposedFn() { }
        // }

        var utils = {

            Strategies: {
                All: 'All', 
                Any: 'Any'
            },

            Methods: {
                All: function (str, tokens) {
                    if (tokens.length < 1) throw new Error('Cannot supply empty token arrays argument');
                    var isMissing = false;
                    tokens.forEach(function (tk) {
                        if (-1 === str.indexOf(tk)) {
                            isMissing = true;
                        }
                    });
                    var allTokensFound = !isMissing;
                    return allTokensFound;
                },

                Any: function (str, tokens) {
                    if (tokens.length < 1) throw new Error('Cannot supply empty token arrays argument');
                    tokens.forEach(function (tk) {
                        if (-1 !== str.indexOf(tk)) {
                            return true;
                        }
                    });
                    return false;
                },
            },


            containsSubstrings: function (str, tokens, options) {

                if (undefined === options) {
                    options = {
                        matchingStrategy: utils.Strategies.All,
                    };
                }


                if (!utils.Methods[options.matchingStrategy]) {
                    throw new Error('Cannot find strategy ' + options.matchingStrategy);
                }

                var method = utils.Methods[options.matchingStrategy];

                return method(str, tokens);
            }
        };

        return utils;

    }
})();