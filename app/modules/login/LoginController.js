(function () {
    var module = angular.module('app.module');

    module.controller('LoginController',LoginController);
    LoginController.$inject = ['$scope','$http','$q','UtilityHelper'];

    function LoginController($scope,$http,$q,UtilityHelper){
        console.log("Login to see all features");
        var vm = this;
        vm.authData ={};
        vm.authData.name = "";
        vm.authData.password ="";
        vm.initLogin = initLogin;
        vm.loginFailed = false;
        vm.loginFailureMessage ="";

        function initLogin(){
            if(vm.authData.name && vm.authData.password){
                authenticate().then(function (response){
                    var data = response.data;

                    if(data.success){
                        localStorage.setItem('authToken',data.token);
                        vm.loginFailed = false;
                        UtilityHelper.navigateTo('/home');
                    }else{
                        vm.loginFailed = true;
                        vm.loginFailureMessage = data.message;
                    }
                },function (error){
                    vm.loginFailed = true;
                    vm.loginFailureMessage = error.message;
                });
            }else{
                alert("Insufficient data to check");
            }

        }
        function authenticate(){
            var deferred = $q.defer();
          /*  $http.post("http://localhost:8100/api/authenticate", JSON.stringify(vm.authData)).then(function success(response){
                deferred.resolve(response);
            },function failure(error){
                deferred.reject("Failed");
            });*/

            $http({
                "url": "http://localhost:8100/api/authenticate",
                "method": "POST",
                "headers": {

                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": "name="+ vm.authData.name+"&password="+ vm.authData.password

            }).then(function success(response){
                deferred.resolve(response);
            },function failure(error){
                deferred.reject("Failed");
            });

            return deferred.promise;
        }

    }

})();