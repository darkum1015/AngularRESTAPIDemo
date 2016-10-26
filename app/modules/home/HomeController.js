(function () {

    var module = angular.module('app.module');
    module.controller('HomeController',HomeController);
    HomeController.$inject = ['$scope'];

    function HomeController($scope){
        console.log("Home loaded");
        var vm = this;


    }

})();