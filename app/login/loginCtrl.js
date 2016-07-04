var loginctrlFn = function ($scope, /*CONSTANTS,*/ userService ) {
   /* function init() {
        $scope.loginTemplate = CONSTANTS.LOGIN_TEMPLATE;
    }*/
    
    userService.users().then(function(response){
          $scope.userDetails = response.data.userCred;
    });
     
    $scope.verfyUser = function(inputEmail,inputPassword) {
       
    angular.forEach( $scope.userDetails, function(value, key)  {
                   if(value.uid == inputEmail )
                       {
                           if(value.pwd == inputPassword)
                                console.log("true");
                                console.log(value.uid+"-"+value.pwd);
                           
                           alert("Login Successful");               
                       }
               });
    }
     
   /* init();*/
};

angular.module('login').controller('loginCtrl', ['$scope'/*,'APP_CONSTANTS'*/ , 'userService', loginctrlFn]);