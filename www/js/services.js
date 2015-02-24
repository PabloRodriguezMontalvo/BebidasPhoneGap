angular.module('starter.services', [])

.factory('Bebidas', function($http,$q) {
        var url="https://awnotepad.azure-mobile.net/tables/bebidas";
var busquedaPrecio=0;
  return {
      getBusquedaPrecio:function(){
          return busquedaPrecio;

      },
      setBusquedaPrecio:function(value){
          busquedaPrecio=value;

      },

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
     var query="?$filter=nombre eq '"+miBebida.busqueda+"'";

        var request=$http(
            {
                url:url+query,
                method:'get'
            });

        return request.then(ok,err);


    },
      busquedaPrecio:function(precio){
          var query="?$filter=precio le "+precio;

          var request=$http(
              {
                  url:url+query,
                  method:'get'
              });

          return request.then(ok,err);

      },
      detalle:function(id){
          var query="?$filter=id eq '"+id+"'";

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
