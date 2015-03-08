# Learning Node

# A Different Approach

Take a break from the traditional way that we normally teach.

* Forget the Intro
  * Your audience wants to learn how to develop in Node.js. They don't want
  to hear that *Node uses an event-driven, non-blocking I/O model that makes
  it lightweight and efficient* or that *Node is a platform built on Chrome's
  JavaScript runtime*. You don't need to sell them on using Node. They're
  already your (captive) audience and they're there because they want to
  learn Node.
  * Their curiosity and desire to know those details will come later once
  they've got their hands dirty with some real code.
* Build something they can immediately use
  * It's highly likely that every member of the audience owns a website or has
  an employer or client that has a website. It's also highly likely that they
  will want to know if the site is not functioning correctly.
  * Let's build, in a few lines of code something that they can actually use
  to help monitor the websites that they're responsible for.
* Build a client not a server
  * It's generally easier to understand what a browser does than a server.
  Why? Because everyone uses a browser all day long.
  * Writing code is not trivial. Writing a client and building on that will
  be easier.

# Who is this for?

* Anybody who wants to learn Node.js
  * You could go through the modules and try and answer the questions on your
  own, however:
  * It would be much better if someone took you through the modules and helped
   you understand the answers to each question.
* Anyone who wants to teach Node.js
  * Use this readme and the code in this repo "as is" to teach students how
  to code in Node.js or...
  * Fork this repo and build your own version.
  * Pull Requests that improve the course are happily accepted.

# How to use this

* Each module introduces a new concept. We start off by building a client that checks
  that our site is running. We add more checks. Then we add testing, mocking and code
  coverage. Finally we discuss tools that may help us.
* This readme will move you from module to module. Each module has some questions
  that we expect to have answered by the end of it.
* Based on time available any number of modules can be covered. It is better that you move
  at the students' pace rather than trying to cover all the modules.
* You should have [Node.js](http://nodejs.org) or [io.js](http://iojs.org) installed.
  (This will also install npm which you'll need.)

# Following along

Use one of these methods if you want to follow along during the presentation/workshop:

* Download the modules (and this file) as a zip file from GitHub and unzip it locally.
  * Advantages: No `git` knowledge or client software required.
* Clone the repo locally
  * Advantages: Can see what changes you made compared to original.
  Can quickly revert changes.
* Fork and clone repo locally
  * Advantages: Can push changes and notes to your fork of the repo.
  Can submit pull requests for improvements you've made.

# HTTP Status

A quick refresher on some HTTP statuses:

* 200 - OK
* 301 - Moved Permanently
* 302 - Found (Moved Temporarily)
* 400 - Bad Request
* 401 - Unauthorized
* 403 - Forbidden
* 404 - Not Found

# Modules

1. A simple client to check a site's status
  * Open the module-01 folder in a terminal window. There should be a single
  `check-site.js` file in there.
  * Open the file in an editor.
    * What does this code do?
    * What is the require() function?
  * Run `node check-site.js`
  * What was the result? Is this what you expected?
  * What could you do to get the expected result?
    * i.e. what happens when you open that site in a browser?
	* Why is this type of utility of value?
	* How can you check both http and https sites?

2. Replace `http` with `request`
  * Open `module-02/check-site.js` in an editor
  * How does this differ from the file in module-01?
  * What is `'use strict'`?
  * What happens when you `node check-site.js` this file?
  * What can we do to address this failure?
    * i.e. Why did `require('http')` work while
    `require('request')` did not?
  * What directory appears after we run `npm install request`?
    * Note: You can use `i` instead of `install`.
  * What is the purpose of this directory?
  * Does `node check-site.js` work now?
    * Does it return the same status as in module-01? We'll
    answer that question in the next module.

3. Check status of multiple sites
  * Notice the new `package.json` file in this directory.
  How can we create it? What is its purpose?
  * What happens when we run `npm i` now?
    Why didn't we have to specify `request` at the end?
  * If `request` wasn't already in `package.json` then how could we
  have added it when running `npm i request`?
  * What's the `^` in front of the version number for request? What
  are the other options?
  * Open `check-site.js`, note the requests that we're making.
  * Run `node check-site.js`.
  * We have 3 `console.log()` statements.
    * Did they print in the same order as in the file?
    * Which one responds first? Why?
    * Is the order of response guaranteed/deterministic?
  * Why are both site returning 200?
    * In a browser one of them returns 301.
  * What needs to be changed to get a 301? i.e. how is `request` "helping?"

4. Using modules
  * What is `module.exports`?
    * Can it be set to anything else or only a function?
  * Why does the `callback()` function take null as the first param?
    * Why does it take a single param in the second instance?
  * Why split the functionality into a separate module?
  * What are the 3 ways of using `require()` that we've seen? i.e.
  Where do the modules reside and what do we need to do to access them?

5. Testing
  * Why is testing important in a non-static language?
  * What happened to the `index.js` file? Don't we need it anymore to run the checks?
	* Open the `package.json` file. What is the `devDependencies` section?
	* What is mocha?
	* Why does `scripts` now have `test` set to `mocha`?
	* How do you add a module to the `devDependencies` section with `npm i`?
	* Open the `test.check-site.js` file. What do `describe()` and `it()` do?
  * Why don't we need to do an `npm i assert` to use the `assert` module?
	* Run the test using `npm test`? Why does this work? i.e. How does `npm`
	know to run `mocha`?
	* What is `done()`?

6. Testing without dependencies
  * What if you were disconnected from the internet or your internet-based
  dependencies is down? How would you test your code?
  * Take a look a `package.json`. What is `rewire`?
  * Why are we using `rewire` instead of something more popular like `sinon`?
  * What happens if we change the status that we're faking to something else
  like a 301 or 404?

7. Generating code coverage
  * What's new in `package.json`? What is `istanbul`?
  * Why are we testing the `test.*.js` pattern and not `*.js` for `istanbul`?
  Why aren't we using this pattern for `mocha`?
  * Run istanbul with `npm run istanbul`. Which lines are not tested?
  * What happens if we change the name of the `callback()` function in the
  error condition to `callbag()`? Will the tests still run okay?
  Do `npm test` and `npm run istanbul` still run okay?
  * What other tools can we use to protect against this?
  * How can we modify our test to check the error handling code?

8. Complete code coverage
  * Take a look at the new test in the test file. What does it do?
  * Run `npm run istanbul`. What does the code coverage look like now?
  * What happens if we change the name of the `callback()` function in the
  error condition to `callbag()`? Will the tests and coverage still run okay?
  * Although they failed, was a coverage report still generated?

Extra:
* Keeping node up-to-date and switching versions:
  * n and nvm
* Deploying multiple versions of node using nvm (bucketed deployments)
* Tools
  * Testing
    * Mocha
      * `npm install mocha --save-dev`
      * `mocha` or `npm test`
  * Mocking
    * Rewire
      * `npm install rewire --save-dev`
      * `var rewire = require('rewire');`
      * `var someModule = rewire('some-module');`
  * Coverage
    * Istanbul
      * `npm install istanbul --save-dev`
      * Setup in package.json
      * `npm run istanbul`
  * Linting
    * JSHint
      * `npm install jshint --save-dev`
      * Setup in package.json
      * `npm run jshint`
  * Pre-commit
    * `npm install pre-commit --save-dev`
  * Update dependencies
    * `npm install npm-update-outdated --save-dev`
    * Use as first command in pre-commit section of package.json to make
     sure that all dependencies are up-to-date.

