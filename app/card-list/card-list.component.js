angular.
module('cardList').
component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: ['cardsFactory', '$mdSidenav',
        function CardListController(cardsFactory, $mdSidenav) {
            var self = this;

            self.sets = cardsFactory.getSets().then(function (response) {
                self.sets = response.data;
            });

            self.cards = cardsFactory.getCards().then(function (response) {
                self.cards = response.data;
            });
        }
    ]
});