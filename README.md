[![Build Status](https://travis-ci.org/Spectrumsun/eventmanager.svg?branch=develop)](https://travis-ci.org/Spectrumsun/eventmanager)
[![Maintainability](https://api.codeclimate.com/v1/badges/f12b2146b1c46953b97a/maintainability)](https://codeclimate.com/github/Spectrumsun/eventmanager/maintainability)
[![HitCount](http://hits.dwyl.io/Spectrumsun/eventmanager.svg)](http://hits.dwyl.io/Spectrumsun/eventmanager)
[![codecov](https://codecov.io/gh/Spectrumsun/eventmanager/branch/develop/graph/badge.svg)](https://codecov.io/gh/Spectrumsun/eventmanager)
[![Coverage Status](https://coveralls.io/repos/github/Spectrumsun/eventmanager/badge.svg?branch=develop)](https://coveralls.io/github/Spectrumsun/eventmanager?branch=develop)


# Event Manager
Given you manage​ ​an​ ​events​ ​center,​ ​this​ ​app​ ​will​ ​help​ ​you​ ​accept​ ​applications​ ​to​ ​use​ ​your​ ​
center  /​ ​facilities,​ ​and​ ​will​ ​either​ ​decline​ ​events​ ​when​ ​the​ ​proposed day is already taken,
or suggest an  available day

# View App
    * template ui   https://spectrumsun.github.io/eventmanager/
    * React ui      https://eventappmanager.herokuapp.com/
    * backend APi   https://eventappmanager.herokuapp.com/api/v1/
    * API Doc       https://eventappmanager.herokuapp.com/api/v1/docs


# Technologies Used
   * Front-end: React/Redux + Bootstrap
   * Back-end: Node/Expressjs + Sequelize/Postgres
   * Test: Mocha/Chai for server test, jest for front end test
   * Authentication: Json web token
   * Libraries: ES6, Babel-CLI, eslint,  express, sequelize, jwt

# Features
   * A User can signup and signin 
   * A page where an authenticated user can add a new event
   * A page, section or view where an authenticated user can Modify the event he/she added
   * A page, section or view where an authenticated user can Delete the event he/she added
   * A page where an admin can add a new center
   * A page, section or view where an admin can modify the details of a center
   * A page showing  a single center and the events slated for that center


# To Install
* Download or clone the repo
* open terminal inside root directory of cloned folder
* type npm install to install the  all dependencies
* type sequelize db:migrate to add migration if using Postgres locally
* npm start to run the app in production mode
* npm dev:start to run the app in development mode

# Test
To run test navigate to app folder in the command line and type
* npm test - To run server test
* npm run test:client -To run client test
* npm run test:e2e - To run end to end test


# FAQs
* Contact spectrumsun@hotmail.com

# Set Default Admin
Add the email address to the env file "ADMINEMAIL=" to set that email as the default admin after signnup

# Limitations
The limitations with the current version of event manager
* No payment system when users book a center



# LICENSE
* [MIT](./LICENSE) © [Taiwo Sunday]

Copyright (c) 2018 Taiwo Sunday