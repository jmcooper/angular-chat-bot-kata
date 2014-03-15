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

Open a new chat window and type: ``server.sh``

Now navigate to: ``http://localhost:8000/index.html

+-------------------------------+---------------------------------------------------------------------------+
| Now I want to make the chat   | For that we'll need a controller so let's add that to our route.          |
| bot welcome me with a random  |                                                                           |
| greeting when I enter the     | First another test on our route:                                          |
| room!                         |                                                                           |
|                               | .. code:: js                                                              |
|                               |                                                                           |
|                               |        ...                                                                |
|                               |        it('should use the chatroom template', function() {                |
|                               |            expect(route.templateUrl)                                      |
|                               |               .toEqual('/chatroom/chatroom-template.htm');                |
|                               |        });                                                                |
|                               |        ...                                                                |
|                               |        it('should use the ChatRoom Controller', function() {              |
|                               |            expect(route.controller)                                       |
|                               |               .toEqual('ChatRoomController');                             |
|                               |        });                                                                |
|                               |                                                                           |
|                               |    });                                                                    |
|                               |                                                                           |
|                               | Now you have another red test, lets make it green!                        |
|                               |                                                                           |
|                               | In app/js/app.js modify the route to look like this:                      |
|                               |                                                                           |
|                               | .. code:: js                                                              |
|                               |                                                                           |
|                               |    $routeProvider.when('/chatroom',                                       |
|                               |       {                                                                   |
|                               |         templateUrl: '/chatroom/chatroom-template.htm',                   |
|                               |         controller: 'ChatRoomController'                                  |
|                               |       });                                                                 |
|                               |                                                                           |
|                               | Your test should now be green!  Is it?                                    |
+-------------------------------+---------------------------------------------------------------------------+
| Ok, my route has a controller | Now that we have a controller, we can add some logic to our page.         |
| but still don't have a        |                                                                           |
| random greeting  from the     | First, let's add a test.  In chatroom-controller-tests.js add             |
| bot! It still just says       | this test:                                                                |
| Hello World.                  |                                                                           |
|                               | .. code:: js                                                              |
|                               |                                                                           |
|                               |    describe('when entering the room', function() {                        |
|                               |        it('should get a random greeting from the chat bot', function() {  |
|                               |            expect(mockChatBot.getRandomGreeting.called).toBeTruthy();     |
|                               |        });                                                                |
|                               |    });                                                                    |
+-------------------------------+---------------------------------------------------------------------------+
| Now I'm getting an            | This is because the getRandomGreeting method doesn't exist yet on the     |
| 'undefined' error.            | ChatBot service.  Add the following inside app/chatroom/chatbot.js:       |
|                               |                                                                           |
|                               | .. code:: js                                                              |
|                               |                                                                           |
|                               |     return {                                                              |
|                               |         getRandomGreeting: function() { }                                 |
|                               |     }                                                                     |
|                               |                                                                           |
+-------------------------------+---------------------------------------------------------------------------+
| Now I'm getting the error     | This is our failing test!  We're expecting our controller to call         |
| 'Expected false to be         | getRandomGreeting, but it's not.  Let's make it pass!                     |
| truthy'                       |                                                                           |
|                               | Add this inside app/chatroom/chatroom-controller.js:                      |
|                               |                                                                           |
|                               | .. code:: js                                                              |
|                               |                                                                           |
|                               |     return {                                                              |
|                               |         getRandomGreeting: function() { }                                 |
|                               |     }                                                                     |
|                               |                                                                           |
+-------------------------------+---------------------------------------------------------------------------+
