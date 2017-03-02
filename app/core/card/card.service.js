'use strict';

angular.
  module('core.card').
  factory('Card', ['$resource',
    function($resource) {
      return $resource('cards/:cardId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
