(function(){

    angular.module('scenarioApp').controller('scenarioController', ['$scope', 'scenarioService', scenarioController]);

    function scenarioController($scope, scenarioService){
        var vm = this;
        vm.hello = "Hello, I am Scenario Controller";
        vm.Scenarios = function() { return scenarioService.GetScenarios(); };
        vm.GetScenario = getScenario;
        vm.LoadScenarios = loadScenario;
        vm.Items = [
            {
                id: 1,
                factors: [
                    {
                        name: 'name',
                        description: 'description'
                    },
                    {
                        name: 'cool name',
                        description: 'awesome description'
                    }
                ]
            },
            {
                id: 2,
                factors: [
                    {
                        name: 'name2',
                        description: 'description2'
                    }
                ]
            }
        ];
        init();

        function init(){
            loadScenario();
        }

        function loadScenario(){
            scenarioService.LoadScenarios()
                .then(function(){})
                .catch(function (errors) {
                    console.log(errors);
                })
        }

        function getScenario(){
            console.log('Load Scenario');
        }
    }

})();