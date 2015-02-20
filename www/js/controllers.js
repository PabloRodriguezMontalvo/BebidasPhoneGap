angular.module('starter.controllers', [])

.controller('BebidasCtrl', function($scope,$ionicLoading,$ionicPopup,
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






    });
