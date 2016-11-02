(function () {

    var module = angular.module('app.module');
    module.controller('HomeController',HomeController);
    HomeController.$inject = ['$scope','$location','UtilityHelper','$http','$q'];

    function HomeController($scope,$location,UtilityHelper,$http,$q){
        console.log("Home loaded");
        var vm = this;
        vm.bearList = [];
        vm.getBears = getBears;
        vm.editBears = editBears;


        UtilityHelper.isAuthorized();
        var authToken = localStorage.getItem('authToken');

        vm.getBears();
        function getBears(){

            if(authToken){
                var url = "http://localhost:8100/api/bears?token="+authToken


                $http({

                    "url": url,
                    "method": "GET",
                    "headers": {
                        "content-type":"application/x-www-form-urlencoded"
                    }

            }).then(function success(response){
                if(response.data.success){
                    vm.bearList = response.data.rows;
                }else{
                    alert(response.data.message +" You will be redirected to login");
                    localStorage.removeItem('authToken');
                    UtilityHelper.navigateTo('/login');
                }


                }, function failure(error){
                    alert(error.message);
                });

            }else{
                //Authenticate and create new token
                UtilityHelper.navigateTo('/login');
            }


        }

        function editBears(itemId){
            UtilityHelper.navigateTo('/edit/bear/'+itemId);
        }
    }


})();