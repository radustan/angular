var callsService = angular.module('App1.callsService', [])
    .factory('callsService', function($http, config) {
    return {
        getCategories: function(type) {
            //return the promise directly.
            return $http({
                url: config.apiUrl,
                method: "GET",
                params: {type: type}
            }).then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
        }
    }
});
