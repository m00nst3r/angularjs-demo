(function(){

    angular.module('scenarioApp').controller('scenarioController', ['$scope', '$routeParams', 'scenarioService', scenarioController]);

    function scenarioController($scope, $routeParams, scenarioService){
        var vm = this;
        vm.Scenario = function() { return scenarioService.GetScenario(); };
        init();

        function init(){
            if (vm.Scenario() == null){
                loadScenario();
            }
        }

        function loadScenario(){
            scenarioService.LoadScenario($routeParams.id)
                .then(function(data){})
                .catch();
        }
    }

})();