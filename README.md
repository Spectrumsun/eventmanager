[![Build Status](https://travis-ci.org/Spectrumsun/eventmanager.svg?branch=develop)](https://travis-ci.org/Spectrumsun/eventmanager)
[![Coverage Status](https://coveralls.io/repos/github/Spectrumsun/eventmanager/badge.svg?branch=develop)](https://coveralls.io/github/Spectrumsun/eventmanager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f12b2146b1c46953b97a/maintainability)](https://codeclimate.com/github/Spectrumsun/eventmanager/maintainability)


# Event Manager
Given you manage​ ​an​ ​events​ ​center,​ ​this​ ​app​ ​will​ ​help​ ​you​ ​accept​ ​applications​ ​to​ ​use​ ​your​ ​
center  /​ ​facilities,​ ​and​ ​will​ ​either​ ​decline​ ​events​ ​when​ ​the​ ​proposed day is already taken,
or suggest an  available day 

## View App
    * backend here "https://sleepy-wave-51548.herokuapp.com/"
    - template ui "https://spectrumsun.github.io/eventmanager/"
      


# Technologies Used
   * Front-end: React/Redux + Bootstrap (Yet To be Implemented)
   * Back-end: Node/Expressjs + Sequelize/Postgres
   * Libraries: ES6, Babel-CLI, eslint, Mocha/Chai, expesss, sequelize, jwt
   * Postman

## Features
   * A User can signup and signin 
   * A page where an authenticated user can add a new event
   * A page, section or view where an authenticated user can Modify the event he/she added
   * A page, section or view where an authenticated user can Delete the event he/she added
   * A page where an admin can add a new center
   * A page, section or view where an admin can modify the details of a center
   * A page showing  a single center and the events slated for that center


 ## Api Endpoints
    * POST -    To sign up a new user -             /api/v1/users
    * POST -    To login in an exsisitng user -     /api/v1/login
    * GET -     To get all the list of events -     /api/v1/events
    * GET -     To get a single event -             /api/v1/events/<eventID>
    * POST -    To add a new event -                /api/v1/events
    * PUT -     To edit existing event -            /api/v1/events/<eventID>
    * DELETE -  To delete a single existing event   /ap/v1/events/<eventID>
    * GET -     To get all the centers -            /api/v1/centers
    * GET -     To get a single center with the events added to the center - /api/v1/centers/<centerID>
    * POST -    To add a new center -               /api/v1/centers
    * PUT -     To edit existing center -           /api/centers/<enterID>
    * DELETE -  To delete a single center -         /api/centers/<centerID>

  

# To Install
* Download or clone 
* open terminal inside root directory of cloned folder
* type npm install to install the dependencies
* type sequelize db:migrate to add migration if using Postgres locally 
* npm start to run the app in production mode
* npm test - to run the test suits on the app
* npm dev:start to run the app in development mode



`
