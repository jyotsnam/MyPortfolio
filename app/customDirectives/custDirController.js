customDirectives.controller('custDirController', ['$scope', function($scope){
     $scope.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
    };  
    
    $scope.customers = [
        {
            name: 'David',
            street: '1234 Anywhere St.'
        },
        {
            name: 'Tina',
            street: '1800 Crest St.'
        },
        {
            name: 'Michelle',
            street: '890 Main St.'
        }
    ];
}]);