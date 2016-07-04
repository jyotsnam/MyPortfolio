main.controller('mainCtrl', ['$scope','$state', function($scope, $state){
    
    $scope.loadDynamicView = function(viewName) {
            console.log($scope.viewName);
        $state.go(viewName);
    }

}]);