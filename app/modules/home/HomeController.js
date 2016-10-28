(function () {

    var module = angular.module('app.module');
    module.controller('HomeController',HomeController);
    HomeController.$inject = ['$scope','$location','UtilityHelper','$http','$q'];

    function HomeController($scope,$location,UtilityHelper,$http,$q){
        console.log("Home loaded");
        var vm = this;
        vm.bearList = [];
        vm.getBears = getBears;



        UtilityHelper.isAuthorized();
        var authToken = localStorage.getItem('authToken');

        vm.getBears();
        function getBears(){

            if(authToken){
                $http({
                   /* "url": "http://localhost:8100/api/bears",
                    "method": "GET",
                    "headers": {
                        "x-access-token": authToken,
                        "content-type": "application/json",
                        "cache-control": "no-cache"
                    }
*/
                    "url": "http://localhost:8100/api/bears",
                    "method": "GET",
                    "headers": {
                        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiYWRtaW4iOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOiJ0ZXN0MTIzIiwibmFtZSI6IkRhcnNoYW4iLCJfaWQiOiI1ODBmMzRhYmVlMDY0YjA4OTAyZTM3ZTEifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W10sIiRfX29yaWdpbmFsX3JlbW92ZSI6W119LCJpYXQiOjE0Nzc2NTY5MDgsImV4cCI6MTQ3NzY1ODM0OH0.7czsNgaaRohF4D9QpNrNQlKzrtCx-qkD7ExgTy539gk"
                    }

            }).then(function success(response){
                    vm.bearList = response.data;
                    console.log(JSON.stringify((vm.bearList)));
                }, function failure(error){
                    alert(error.message);
                });

            }else{
                //Authenticate and create new token
                UtilityHelper.navigateTo('/login');
            }


        }

    }


})();