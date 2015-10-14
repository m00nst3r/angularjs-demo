(function(){
    angular.module('scenarioApp').factory('scenarioRepository', ['$http', '$q', 'baseUrl', scenarioRepository]);

    function scenarioRepository($http, $q, baseUrl){

        function loadScenarios(){
            var deferred = $q.defer();

            $http.get(baseUrl + 'bears/')
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        return{
            LoadScenarios: loadScenarios
        }
    }
})();