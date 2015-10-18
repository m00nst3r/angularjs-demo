(function(){
    angular.module('scenarioApp').factory('scenarioRepository', ['$http', '$q', 'baseUrl', scenarioRepository]);

    function scenarioRepository($http, $q, baseUrl){

        function _loadScenarios(){
            var deferred = $q.defer();

            $http.get(baseUrl + 'scenarios/')
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function _loadScenario(id){
            var deferred = $q.defer();

            $http.get(baseUrl + 'scenario/' + id)
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        return{
            LoadScenarios: _loadScenarios,
            LoadScenario: _loadScenario
        }
    }
})();