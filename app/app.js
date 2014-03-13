'use strict';
var chatbotModule = angular.module('chatbot', ['ngRoute'])
	.config(function($routeProvider) {
        $routeProvider.when('/chatroom', {templateUrl: '/chatroom/chatroom-template.htm'});
	});
