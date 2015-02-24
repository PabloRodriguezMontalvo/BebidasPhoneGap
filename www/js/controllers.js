angular.module('starter.controllers', [])

.controller('BebidasCtrl', function($scope,$state,$ionicLoading,$ionicPopup,
                                    Bebidas) {

        $scope.bebida={};


        $scope.registrar=function(){
            $ionicLoading.show(
                {
                    template:'Guardando bebida'

                });


            Bebidas.registro($scope.bebida).then(
                function(res){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        template:'Bebida guardada',
                        title: '¡Exito!'
                    });

                },
                function(err){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        template:'Error al guardar',
                        title: '¡Error!'
                    });
                }
           );
        };

        $scope.buscarPrecio=function(){

            Bebidas.setBusquedaPrecio($scope.bebida.busqueda);
            $state.go('bebidas.busquedaPrecio');

        };
        $scope.buscar=function(){

            $ionicLoading.show(
                {
                    template:'Buscando bebida'

                });
            Bebidas.busqueda($scope.bebida).then(
                function(res){
                    $ionicLoading.hide();

                    if(res.length>0){
                        $ionicPopup.alert({
                            template:'Encontrada '+res[0].nombre +
                            ' con precio '+res[0].precio,
                            title: '¡Exito!'
                        });

                    }
                    else{

                        $ionicPopup.alert({
                            template:'Bebida no encontrada',
                            title: '¡Error!'
                        });
                    }





                },
                function(err){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        template:'Error al buscar',
                        title: '¡Error!'
                    });

                }
            );
        };






    })
    .controller('BebidasBusquedaPrecioCtrl',
                        function($scope,$stateParams,
                                        Bebidas) {

        $scope.bebidas=[];

        Bebidas.busquedaPrecio(Bebidas.getBusquedaPrecio()).then(
            function(res){

                $scope.bebidas=res;
            },
            function(err){
                alert(err);

            }
        );

    })
    .controller('BebidasBusquedaPrecioDetalleCtrl',
    function($scope,$stateParams,
             Bebidas) {

        $scope.bebida={};

        Bebidas.detalle($stateParams.idBebida).then(
            function(res){
                if(res.length>0)
                    $scope.bebida=res[0];
            },
            function(err){
                alert(err);

            }
        );

    })

;
