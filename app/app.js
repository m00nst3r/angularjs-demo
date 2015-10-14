(function(){
    var scenarioApp = angular.module('scenarioApp', ['ngRoute']);

    scenarioApp.config([
        '$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/indexView.html'
                })
                .when('/scenario', {
                    templateUrl: "app/views/scenario.html"
                })
                .otherwise('/')
        }
    ]);

    scenarioApp.value("baseUrl", "http://localhost:8080/api/");
})();