require(['config'], function(config){
  'use strict';

  require([
    'angular',
    'app',
    'moment',

    'app/controllers/projectStream',
    'app/filters/formatNumber'
  ], function(angular, app, moment){
    app.config(function(
      $httpProvider, $interpolateProvider
    ) {
      // compatiblity with Django templates
      $interpolateProvider.startSymbol('<%');
      $interpolateProvider.endSymbol('%>');

      // add in Django csrf support
      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });

    moment.lang(window.SentryConfig.lang);

    angular.bootstrap(document, ['app']);
  });
});
