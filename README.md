# Learning Node

# A Different Approach

Take a break from the traditional way that we normally teach.

* Forget the Intro
  * Your audience wants to learn how to develop in Node.js. They don't want
  to hear that
  *Node uses an event-driven, non-blocking I/O model that makes it lightweight
   and efficient* or that *Node is a platform built on Chrome's JavaScript
   runtime*. You don't need to sell them on using Node. They're already your
   (captive) audience and they're there because they want to learn Node.
   Don't waste their time.
  * Their curiosity and desire to know those details will come later once
  they've got their hands dirty with some real code.
* Build something they can immediately use
  * It's highly likely that every member of the audience owns a website or has
  an employer or client that has a website. It's also highly likely that they
  will want to know if the site is not functioning correctly.
  * Let's build, in a few lines of code something that they can actually use
  to help monitor the websites that they're responsible for. We're going
  to build something that they can use instead of something contrived.
* Build a client not a server
  * It's generally easier to understand what a browser does than a server.
  Why? Because everyone uses a browser all day long.
  * Writing code is not trivial. Writing a client and building on that will
   ease them into Node rather than throwing them in the deep end.

# Who is this for?

* Anybody who wants to learn Node.js
  * You could go through the slides and modules and try and answer the
  questions on your own, however:
  * It would be much better if someone took you through the slides and each
  module and helped you understand the answers to each question.
* Anyone who wants to teach Node.js
  * Use the slides and the code in this repo "as is" to teach students how
  to code in Node.js or...
  * Fork this repo and build your own version.
  * Pull Requests that improve the course are happily accepted.

# How to use this

* Each module introduces a new concept. We start off by building a client that checks
  that our site is running. We add more checks. Then we add testing, mocking and code
  coverage. We move on to creating a server. Finally we discuss tools that may help us.
* The slides will help you move from module to module. Each module has a bunch of questions
   that we expect to have answered by the end of it. At the end of each module check that
   each question has been asked and answered.
* Based on time available any number of modules can be covered. It is better that you move
   at the students' pace rather than trying to cover all the modules.

# Modules

1. A simple client to check a site's status
  * Create file
	* Run and expect error
	* `npm install request`
	* Why is this type of utility of value?

2. Check status of multiple sites
  * Why are both returning 200?
  * What needs to be changed to get a 301? i.e. how is `request` "helping?"
  * What order are the results returned in? Is this predictable?

3. Testing
  * What is `module` and `module.exports`?
  * Why is testing important in a non-static language?
	* Make the file testable
	* Add a test

4. Testing without dependencies
  * What if you were disconnected from the internet? How would you test your code?
  * How would you test your error handling code?

5. Generating code coverage
  * Which lines are not tested?
  * What happens if we change the name of the "callback" function in the error condition?
  Does `npm test` still run okay?
  * What other tools can we use to protect against this?

6. Complete code coverage
  *

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

