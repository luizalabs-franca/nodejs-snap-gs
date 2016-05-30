'use strict';

angular.module('nodejsSnapGsApp', [
  'nodejsSnapGsApp.auth',
  'nodejsSnapGsApp.admin',
  'nodejsSnapGsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
