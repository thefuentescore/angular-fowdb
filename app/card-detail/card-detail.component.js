angular.
module('cardDetail').
component('cardDetail', {
    templateUrl: 'card-detail/card-detail.template.html',
    controller: ['$http', '$routeParams', function CardDetailController($http, $routeParams) {
        var self = this;
        $http.get('cards/cards.json').then(function (response) {
            self.cards = response.data;
            
            function findCard(card) {
                return card.code === $routeParams.cardId;
            }

            self.card = self.cards.find(findCard);
        });

    }]
});