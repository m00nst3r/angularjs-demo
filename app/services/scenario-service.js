(function(){
    angular.module('scenarioApp').factory('scenarioService', ['$http', '$q', 'scenarioRepository', scenarioService]);

    function scenarioService($http, $q, scenarioRepository){
        var scenariosCollection = null;
        var scenario = null;

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

        function loadScenario(id){
            var deferred = $q.defer();
            scenarioRepository.LoadScenario(id)
                .then(function(respons){
                    scenario = respons;
                    deferred.resolve(respons);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        function getScenarios(){
            return scenariosCollection;
        }
        function _getScenario(){
            return scenario;
        }
        function setScenario(newScenario){
            scenario = newScenario;
        }

        return{
            LoadScenarios: loadScenarios,
            GetScenarios: getScenarios,
            SetScenario: setScenario,
            GetScenario: _getScenario,
            LoadScenario: loadScenario
        }
    }
})();