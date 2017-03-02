'use strict';

angular.
  module('fowdb').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cards', {
          template: '<card-list></card-list>'
        }).
        when('/cards/:cardId', {
          template: '<card-detail></card-detail>'
        }).
        otherwise('/cards');
    }
  ]);