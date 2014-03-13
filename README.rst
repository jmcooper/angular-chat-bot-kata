Angular TDD Chat Bot Kata
=========================

Kata for learning mockist/interaction/London style TDD in AngularJS

Setup
-----
You will need [node/npm](http://nodejs.org/) and [git](http://git-scm.com/) installed.

You will also need [Chrome](https://www.google.com/intl/en/chrome/browser/) ([Firefox](http://www.mozilla.org/en-US/firefox/new/) will work with a bit of configuration).

.. code:: bash

    git clone https://github.com/jmcooper/angular-chat-bot-kata.git
    cd angular-chat-bot-kata


You will need in use npm to install karma .

.. code:: bash

    npm install karma karma-jasmine karma-chrome-launcher


Introduction
------------

+---------------------------------------------------------+---------------------------------------------+
| I hear you want to try Mockist style TDD in JavaScript  | I do! I do!                                 |
+---------------------------------------------------------+---------------------------------------------+
| What do you want to build?                              | A chat room with a wisdom bot in AngularJS  |
+---------------------------------------------------------+---------------------------------------------+
| We start by writing an acceptance test.                 | Yes and for now they will be manual.        |
+---------------------------------------------------------+---------------------------------------------+
| Why not automate it?                                    | I will, just not in this Kata.              |
+---------------------------------------------------------+---------------------------------------------+


Starting
--------

+-------------------------------+-------------------------------------------------------------------+
| I need a new page in my app,  | By creating a test for a route!                                   |
| how do I test drive that?     |                                                                   |
|                               | In tests/app-config-tests.js add this test:                       |
|                               |                                                                   |
|                               | .. code:: js                                                      |
|                               |                                                                   |
|                               |    describe('when requesting the chatroom route', function() {    |
|                               |        var route;                                                 |
|                               |        beforeEach(function() {                                    |
|                               |            route = routeService.routes['/chatroom'];              |
|                               |        });                                                        |
|                               |                                                                   |
|                               |        it('should use the chatroom template', function() {        |
|                               |            expect(route.templateUrl)                              |
|                               |               .toEqual('/chatroom/chatroom-template.htm');        |
|                               |        });                                                        |
|                               |    });                                                            |
|                               |                                                                   |
+-------------------------------+-------------------------------------------------------------------+
| Great, I have a test,         | Run this in your bash console to start Angular's Karma test tool: |
| how do I run it?              | ``node_modules/karma/bin/karma start tests/config/karma.conf.js`` |
+-------------------------------+-------------------------------------------------------------------+
|Now I'm getting an error when  | That error is trying to tell you that the route is undefined,     |
|the test runs!                 | it's your first failing test!  Lets make it pass.                 |
|                               |                                                                   |
|                               | In app/js/app.js in the config block add:                         |
|                               |                                                                   |
|                               | .. code:: js                                                      |
|                               |                                                                   |
|                               |    $routeProvider.when('/chatroom',                               |
|                               |       {templateUrl: '/chatroom/chatroom-template.htm'});          |
|                               |                                                                   |
+-------------------------------+-------------------------------------------------------------------+

