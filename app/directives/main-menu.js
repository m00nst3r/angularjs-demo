(function(){
    angular.module('scenarioApp').directive('mainMenu', mainMenu);

    function mainMenu(){
        function link(scope, b, attr){
            //console.log(b, attr);
        }
        return{
            restrict: "AEC",
            replace: true,
            templateUrl: "app/templates/mainMenu.html",
            link: link
        }
    }
})();