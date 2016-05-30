'use strict';

angular.module('nodejsSnapGsApp.auth', [
  'nodejsSnapGsApp.constants',
  'nodejsSnapGsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
