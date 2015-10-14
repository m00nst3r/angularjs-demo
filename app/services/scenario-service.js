(function(){
    angular.module('scenarioApp').factory('scenarioService', ['$http', '$q', 'scenarioRepository', scenarioService]);

    function scenarioService($http, $q, scenarioRepository){
        var scenariosCollection = null;

        function loadScenarios(){
            var deferred = $q.defer();
            scenarioRepository.LoadScenarios()
                .then(function(respons){
                    scenariosCollection = respons;
                    deferred.resolve();
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getScenarios(){
            return scenariosCollection;
        }
        function setScenario(newScenario){
            scenariosCollection = newScenario;
        }

        return{
            LoadScenarios: loadScenarios,
            GetScenarios: getScenarios,
            SetScenario: setScenario
        }
    }
})();