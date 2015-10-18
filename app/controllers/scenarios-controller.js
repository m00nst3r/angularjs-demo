(function(){

    angular.module('scenarioApp').controller('scenariosController', ['$scope', 'scenarioService', scenariosController]);

    function scenariosController($scope, scenarioService){
        var vm = this;
        vm.Scenarios = function() { return scenarioService.GetScenarios(); };
        vm.LoadScenarios = loadScenarios;
        vm.OpenScenario = openScenario;
        init();

        function init(){
            loadScenarios();
        }

        function openScenario(scenario){
            scenarioService.SetScenario(scenario);
            window.location.hash = '/scenario/' + scenario.id;
        }

        function loadScenarios(){
            scenarioService.LoadScenarios()
                .then(function(){})
                .catch(function (errors) {
                    console.log(errors);
                })
        }
    }

})();