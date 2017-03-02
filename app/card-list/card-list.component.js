angular.
module('cardList').
component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: ['$http', function CardListController($http) {
        var self = this;
        $http.get('cards/sets.json').then(function (response) {
            self.sets = response.data;
        });

        $http.get('cards/cards.json').then(function (response) {
            self.cards = response.data;
        });
    }]
});