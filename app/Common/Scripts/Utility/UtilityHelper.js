(function () {
    var module = angular.module('app.module');

    module.service('UtilityHelper',UtilityHelper);

    UtilityHelper.$inject =['$location'];
    function UtilityHelper($location){

        this.navigateTo = function(path){
            if(path){
                $location.path(path);
            }
        }

        this.isAuthorized = function(){
            if(!localStorage.getItem('authToken')){
                this.navigateTo('/login');
            }

        }


    }

})();

