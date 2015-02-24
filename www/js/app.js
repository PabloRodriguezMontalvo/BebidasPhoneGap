// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      .state('bebidas', {
          url: "/bebidas",
          abstract: true,
          templateUrl: "templates/plantilla.html"
      })
      .state('bebidas.registro', {
          url: '/registro',
          views: {
              'VistaBebidas': {
                  templateUrl: 'templates/Registrar.html',
                  controller: 'BebidasCtrl'
              }
          }
      })
      .state('bebidas.busqueda', {
          url: '/busqueda',
          views: {
              'VistaBebidas': {
                  templateUrl: 'templates/busqueda.html',
                  controller: 'BebidasCtrl'
              }
          }
      })
      .state('bebidas.busquedaPrecio', {
          url: '/busquedaPrecio',
          views: {
              'VistaBebidas': {
                  templateUrl: 'templates/busquedaPrecio.html',
                  controller: 'BebidasBusquedaPrecioCtrl'
              }
          }
      })
      .state('bebidas.busquedaPrecioDetalle', {
          url: '/busquedaPrecioDetalle/:idBebida',
          views: {
              'VistaBebidas': {
                  templateUrl: 'templates/busquedaPrecioDetalle.html',
                  controller: 'BebidasBusquedaPrecioDetalleCtrl'
              }
          }
      })

  ;



        $urlRouterProvider.otherwise('/bebidas/registro');

});
