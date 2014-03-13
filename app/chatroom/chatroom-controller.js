'use strict';
// Declare app level module which depends on filters, and services
chatbotModule.controller('ChatRoomController', ['$scope', 'ChatBot', function($scope, chatBot) {
    chatBot.getRandomGreeting();
}]);
