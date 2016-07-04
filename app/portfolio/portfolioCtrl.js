var portfolioCtrlFn = function ($scope, CONSTANTS) {
    function init() {
       // $scope.portfolioTemplate = CONSTANTS.PORTFOLIO_TEMPLATE;
    }
    init();
};

portfolio.controller('portfolioCtrl', ['$scope','APP_CONSTANTS','userService',  portfolioCtrlFn]);