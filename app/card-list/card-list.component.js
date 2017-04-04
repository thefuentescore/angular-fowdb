angular.
module('cardList').
component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: CardListController
});

function CardListController(cardsFactory, $mdSidenav) {
    var self = this;
    self.wishList = [];
    self.sets = cardsFactory.getSets().then(function (response) {
        self.sets = response.data;
    });

    self.cards = cardsFactory.getCards().then(function (response) {
        self.cards = response.data;
    });

    self.addCard = function (card) {
        self.wishList.push({
            wishedCard: card,
            checked: false
        });
    }
    self.removeList = function () {
        var oldList = self.wishList;
        self.wishList = [];
        angular.forEach(oldList, function (x) {
            if (!x.checked)
                self.wishList.push(x);
        })
    }
}