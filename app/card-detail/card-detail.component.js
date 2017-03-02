angular.
module('cardDetail').
component('cardDetail', {
    templateUrl: 'card-detail/card-detail.template.html',
    controller: ['cardsFactory', '$routeParams',
        function CardDetailController(cardsFactory, $routeParams) {
            var self = this;

            self.cards = cardsFactory.getCards().then(function (response) {
                self.cards = response.data;

                function findCard(card) {
                    return card.code === $routeParams.cardId;
                }

                self.card = self.cards.find(findCard);
            });

        }
    ]
});