'use strict';

angular.
module('core.card').
factory('cardsFactory', ['$http',
  function ($http) {

    var dataFactory = {};

    dataFactory.getCards = function () {
      return $http.get('/cards/cards.json');
    };

    dataFactory.getSets = function () {
      return $http.get('/cards/sets.json');
    };

    return dataFactory;
  }
]);