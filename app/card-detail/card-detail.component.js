angular.
module('cardDetail').
component('cardDetail', {
    templateUrl: 'card-detail/card-detail.template.html',
    controller: ['cardsFactory', '$routeParams',
        function CardDetailController(cardsFactory, $routeParams) {
            var self = this;
            self.card = cardsFactory.getCard($routeParams.cardId).then(function (response) {
                    self.card = response.data;
                }
            );
        }
    ]
});