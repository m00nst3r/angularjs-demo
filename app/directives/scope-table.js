(function(){
    angular.module('scenarioApp').directive('scopeTable', scopeTable);

    function scopeTable(){
        function link(scope, b, attr){
            scope.scopeCollection= [];
            scope.EditItem = editItem;
            var scopes = scope.scopes;
            angular.forEach(scopes.scope, function(value, key){
                var Obj = { name: key, value: value };
                scope.scopeCollection.push(Obj);
            });
            function editItem(hello){
                console.log(hello);
            }
        }
        return{
            restrict: "AEC",
            scope:{
                scopes: '=',
                canedit: '='
            },
            replace: true,
            templateUrl: "app/templates/scopeTable.html",
            link: link
        }
    }
})();

(function(){
    angular.module('scenarioApp').directive('moreRow', moreRow);

    function moreRow(){
        return{
            scope:{
                level: '='
            },
            restrict: "EAC",
            replace: true,
            templateUrl: "app/templates/moreRows.html"
        }
    }
})();