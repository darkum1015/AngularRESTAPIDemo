(function(){
    var module = angular.module("app.module", ["ngRoute", "ui.bootstrap"]);

    module.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.get = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });
    module.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
       $routeProvider
        .when('/',{
           templateUrl: 'app/modules/home/home.html',
           controller: 'HomeController',
           controllerAs: 'homeCtrl'
       })
           .when('/login',{
               templateUrl: 'app/modules/login/login.html',
               controller: 'LoginController as loginCtrl'
           })
           .otherwise({
               templateUrl: 'app/modules/home/home.html',
               controller: 'HomeController',
               controllerAs: 'homeCtrl'
           });
    }]);

    module.run(RunApp);
    RunApp.$inject = ["$location"];
    function RunApp($location){
        console.log("Welcome to the Serviceconsume");

    }
})();
