'use strict';

describe('chatroom controller', function(){
    var controller, scope, mockChatBot;

    beforeEach(function(){
        module('chatbot');
        inject(function($rootScope, $controller, ChatBot) {
            scope = $rootScope.$new();
            mockChatBot = sinon.stub(ChatBot);
            controller = $controller('ChatRoomController', {$scope: scope});
        })
    });

    //Add tests here
});



