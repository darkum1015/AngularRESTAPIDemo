(function(){
    var module = angular.module('app.module');

    module.controller('EditBearController',EditBearController);

    EditBearController.$inject = ['UtilityHelper','EditBearHelper','$routeParams'];

    function EditBearController(UtilityHelper,EditBearHelper,$routeParams){
        var vm = this;
        vm.bearObj = [];
        vm.getBear = getBear;
        vm.saveBear = saveBear;

        UtilityHelper.isAuthorized();
        var authToken = localStorage.getItem('authToken');
        vm.getBear();
        function getBear(){
            var itemId=null;
            if($routeParams.id){
                itemId = $routeParams.id;

                EditBearHelper.getBear(authToken,itemId).then(function(response){
                    vm.bearObj = response.data;
                },function (error) {
                    alert(error.message);
                });

            }
        }

        function saveBear(){
            if($routeParams.id){
                itemId = $routeParams.id;

                EditBearHelper.saveBear(authToken,itemId,vm.bearObj).then(function(response){
                    UtilityHelper.navigateTo('/home');
                },function (error) {
                    alert(error.message);
                });

            }
        }



    }
})();
