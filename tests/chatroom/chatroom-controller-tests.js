'use strict';

describe('chatroom controller', function(){
    var controller;
    var scope

    beforeEach(function(){
        module('chatbot');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller(ChatRoomController, {$scope: scope});
        })
    });

    //Add tests here

});



