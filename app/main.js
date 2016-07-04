var main = angular.module('main', ['ui.router', 'ngAnimate' ,'home','common','resume','portfolio','emailnow', 'login', 'customDirectives', 'search']);

main.config(['$urlRouterProvider','$stateProvider','APP_CONSTANTS', function($urlRouterProvider,$stateProvider,CONSTANTS){
    console.log("inside main config");
    
    $urlRouterProvider.otherwise('/');
    
    var home={
        name:'home',
        url:"/",
        templateUrl:CONSTANTS.HOME_TEMPLATE
    };
    
    var resume={
        name:'resume',
        templateUrl:CONSTANTS.RESUME_TEMPLATE
    };

    var portfolio={
        name:'portfolio',
        templateUrl:CONSTANTS.PORTFOLIO_TEMPLATE
    };
    
     var emailnow={
        name:'emailnow',
        templateUrl:CONSTANTS.EMAILNOW_TEMPLATE
    };
    
    $stateProvider.state('home', home);
    $stateProvider.state('resume', resume);
    $stateProvider.state('portfolio', portfolio);
    $stateProvider.state('emailnow', emailnow);

}]);

main.service('userService',['$http', function($http){
    this.users = function(){ return $http.get('app/data/users.json') }; 
    }]);

main.service('uService',['$http' , function($http){
    this.uData = function(uname){
        return $http.get("https://api.github.com/users/" + uname);
    };
    
    this.repos = function(uname){ 
        return $http.get("https://api.github.com/users/" + uname + "/repos");
    }
}]);