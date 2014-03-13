'use strict';
describe('app', function(){
    var routeService;

    beforeEach(function(){
        module('chatbot');

        inject(function($route) {
            routeService = $route;
        })
    });

    //Add tests here
    describe('when requesting the chatroom route', function() {
        var route;
        beforeEach(function() {
            route = routeService.routes['/chatroom'];
        });

        it('should use the chatroom template', function() {
            expect(route.templateUrl).toEqual('/chatroom/chatroom-template.htm');
        });
    });
});