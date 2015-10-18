(function(){
    var scenarioApp = angular.module('scenarioApp', ['ngRoute']);

    scenarioApp.config([
        '$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/indexView.html'
                })
                .when('/scenarios/', {
                    templateUrl: "app/views/scenarios.html",
                    controller: "scenariosController as vm"
                })
                .when('/scenario/:id', {
                    templateUrl: "app/views/scenario.html",
                    controller: "scenarioController as vm"
                })
                .otherwise('/')
        }
    ]);

    scenarioApp.value("baseUrl", "http://localhost:8080/api/");
})();