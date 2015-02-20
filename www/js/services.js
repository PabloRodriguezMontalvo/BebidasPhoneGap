angular.module('starter.services', [])

.factory('Bebidas', function($http,$q) {
        var url="https://ejerciciospg.azure-mobile.net/tables/bebidas";

  return {
    registro: function(miBebida) {
        var request=$http(
            {
                url:url,
                method:'post',
                data: miBebida

            });

        return request.then(ok,err);



    },
    busqueda: function(miBebida) {
     var query="?$filter=nombre eq '"+miBebida.nombre+"'";

        var request=$http(
            {
                url:url+query,
                method:'get'
            });

        return request.then(ok,err);


    }


  }
        function ok(resp){
            return resp.data;

        }
        function err(resp){
            if(!angular.isObject(resp.data) || !resp.data.message){
                return($q.reject("Error desconocido"));

            }
            return ($q.reject(resp.data.message));
        }
});
