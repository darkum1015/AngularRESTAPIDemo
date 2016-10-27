(function () {

    var module = angular.module('app.module');
    module.controller('HomeController',HomeController);
    HomeController.$inject = ['$scope','$location','UtilityHelper'];

    function HomeController($scope,$location,UtilityHelper){
        console.log("Home loaded");
        var vm = this;
       UtilityHelper.isAuthorized();

    }

})();