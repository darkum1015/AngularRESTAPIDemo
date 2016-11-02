(function () {
    var module = angular.module('app.module');

    module.service('EditBearHelper', EditBearHelper);
    EditBearHelper.$inject = ['$http','$q'];

    function EditBearHelper($http,$q){

        this.getBear = function(authToken,itemId){
            var deferred = $q.defer();
            $http({
                'url':'http://localhost:8100/api/bears/'+itemId + "?token="+authToken,
                'method': 'GET',
                "headers": {
                    "content-type":"application/x-www-form-urlencoded"
                }


            }).then(function success(response){
                deferred.resolve(response);
            },function failure(error){
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.saveBear = function(authToken,itemId,item){
            var deferred = $q.defer();
            if(item){
                $http({
                    'url':'http://localhost:8100/api/bears/'+itemId + "?token="+authToken,
                    'method':'PUT',
                    'headers':{
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    "data": "name="+item.name+"&species="+item.species
                }).then(function success(response){
                    deferred.resolve(response);
                },function failure(error){
                    deferred.reject(error);
                });
                return deferred.promise;
            }

        }

    }


})();