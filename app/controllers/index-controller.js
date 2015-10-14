(function(){

    angular.module('scenarioApp').controller('indexCtrl', ['$scope', indexCtrl]);

    function indexCtrl($scope){
        var vm = this;
        vm.hello = "Hello, I am angular";
    }

})();