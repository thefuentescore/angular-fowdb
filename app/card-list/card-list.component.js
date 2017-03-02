angular.
module('cardList').
component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: ['http',
        function CardListController($http) {

        }
    ]
});