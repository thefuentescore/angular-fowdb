'use strict';

angular.
module('core.card').
factory('cardsFactory', ['$http',
  function ($http, $routeParams) {

    var dataFactory = {};

    dataFactory.getCards = function () {
      return $http.get('/cards/cards.json');
    };

    dataFactory.getSets = function () {
      return $http.get('/cards/sets.json');
    };

    dataFactory.getCard = function(cardId){
      return $http.get('/cards/' + cardId + '.json');
    }

    return dataFactory;
  }
]);