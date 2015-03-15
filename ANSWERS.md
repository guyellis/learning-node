#Answers and notes to the Modules questions

1. A simple client to check a site's status
  * What does this code do?
    * It makes an HTTP GET request to a web site and prints the HTTP
    status returned to the console.
  * What is the `require()` function?
    * `require()` is how you make the functionality of one module
    available to another module in Node.
  * What was the result? Is this what you expected?
    * 301, would have expected a 200.
  * What could you do to get the expected result? i.e. what happens when you open that site in a browser?
    * Change the require to use `https` and the protocol to `https` in the `get()` method.
  * Why is this type of utility of value?
    * 99% of web-developers have at least one site they are responsible for.
    A utility like this can automate the monitoring of countless URIs.
  * How can you check both http and https sites?
    * `require('http')` and `require('https')`

2. Replace `http` with `request`
  * How does this differ from the file in module-01?
    * We're using `request` instead of `http`.
    * We've added `use 'strict'`.
  * What is `'use strict';`? Bonus points if you can answer: What is `'use strong';`?
    * It is a way to opt in to a restricted variant of JavaScript.
    * It will help you catch coding mistakes. Use it.
    * [Mozilla explains strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
    * `'use strong';` is an even more restrictive mode than `'use strict';` It's currently a
    [Google Strawman Proposal](https://docs.google.com/document/d/1Qk0qC4s_XNCLemj42FqfsRLp49nDQMZ1y7fwf5YjaI4/view#heading=h.q74i7jz78xf).
  * What happens when you run `node check-site.js`?
    * An `Error: Cannot find module 'request'` or similar is printed.
  * What can we do to address this failure? i.e. Why did `require('http')` work while
    `require('request')` did not?
    * `http` is a core module which means that it comes as part of the Node runtime.
    `request` is a third party module that needs to be installed. We can
    fix this by running `npm install request`.
  * What directory appears after we run `npm install request`?
  (Note: You can use `i` instead of `install`.)
    * `node_modules`
  * What is the purpose of this directory?
    * This is where all the third party libraries (modules) that you
    install will be placed.
  * Does `node check-site.js` work now?
    Does it return the same status as in module-01? (We'll
    answer that question in the next module.)
    * Yes it works but it returns a 200 while module-01 returned
    301 for the http version of the site.
  * Why use `request` instead of `http`?
    * Third party modules build on Node's core modules and provide
    extra functionality.
    * If you need to provide custom functionality you can fork a
    third party module and extend or modify it. Although you can
    also do this with Node it will be more complex and keeping you
    core platform (Node) up-to-date will be more difficult.

3. Check status of multiple sites
  * Notice the new `package.json` file in this directory.
  How can we create it? What is its purpose?
    * `npm init` will provide an interactive command-line mode
    to create the `package.json` file.
    * It holds metadata relevant to the project. Files like this are
    also sometimes called manifests.
    * It provides `npm` with the information it needs to complete its commands.
  * What happens when we run `npm i` now?
    Why didn't we have to specify `request` at the end?
    * The `request` module gets installed in the node_modules directory.
    * We didn't need to specify `request` because it's part of the
    `package.json's` dependencies.
  * If `request` wasn't already in `package.json` then how could we
  have added it when running `npm i request`?
    * `npm i request --save`
  * What's the `^` in front of the version number for request? What
  are the other options?
    * `^` tells `npm` to get the module with the same major version
    number and the highest possible minor and patch numbers.
    * `*` tells `npm` to get the most recent version of the module.
    * `~` tells `npm` to get the module with the same major and minor
     version numbers and the highest possible patch number.
    * Drop the prepended symbol from version number to get the exact version.
    * For more information about version see [SemVer](http://semver.org/)
  * Run `node check-site.js`. We have 3 `console.log()` statements.
    * Did they print in the same order as in the file?
      * Probably not.
    * Which one responds first? Why?
      * They most likely printed in the reverse order to which they are
      ordered in the file.
      * JavaScript is asynchronous. If a callback is provided to a function
      that needs to wait on a response from a resource (such as a call
      to a web server) then processing will continue with the subsequent
      instructions. Once the resource responds then the callback will
      be called with the results.
      * In our example, the two `request()` calls, were waiting for the
       server to respond.
      * The second `request()` may have returned more quickly because
      the server was able to process it faster or it hit a different
      server in a load balanced cluster that could respond faster.
    * Is the order of response guaranteed/deterministic?
      * No.
  * Why are both site returning 200? In module-01 the http version returned 301.
    * The `request` module is helping us by "following" the redirect that
    the server responded with. Just like a browser would.
  * What needs to be changed to get a 301? i.e. how is `request` "helping?"
    * We need to use the `followRedirect: false` option when making the request.
    * `request({uri:'server.com', followRedirect: false});`

4. Using modules
  * What is `module.exports` in `check-site.js`? Can it be set to anything
  or only a function?
    * `modules.exports` is the object that's returned as a result of the
    `require()` call.
    * It can be set to anything. Most commonly I have seen it set to a
    function. After that an object is the next most common and then an
    array. (These are my anecdotal observations.)
  * Why doesn't `check-site` have `.js` at the end in the `require()` in
  the `index.js` file?
    * Node assumes an extension of `.js` if it's missing.
  * Why is `check-site` preceded by `./` and `require('request')` didn't need this?
    * `check-site` is a module that's local to the application that you're writing
    so you need to tell Node where it is. `./` tells Node that it's in the same
    directory as the file that's requesting it.
  * Why does the `callback()` function take null as the first param?
  Why does it take a single param in the second instance?
    * The Node paradigm for callbacks is to pass the error as the first
    parameter and any results/data in subsequent parameters. Read more about
    [Error First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
    * The first function is returning no error (null) as the first parameter and the data
    as the second parameter. The second function is returning an error only (first parameter)
    and has no data to supply because it's signalling that an error occurred.
  * Why split the functionality into a separate module?
    * By modularizing our functionality we are going to make it easier to test.
  * What are the 3 ways of using `require()` that we've seen? i.e.
  Where do the modules reside and what do we need to do to access them?
    * Core Node modules such as `http` can simply be used by referencing them
     using `require(<core-module-name')`
    * Third party modules first need to be installed with `npm i`. This will
    put them in the `node_modules` directory and then they can be referenced
    in the same way that core modules are referenced using
    `require(<third-party-module-name>)`
    * Local application modules should be referenced using a relative path
    `require('../../lib/<local-module-name>)`

5. Testing
  * Why is testing important in dynamically typed language such as JavaScript?
    * Statically typed languages typically have compilers that perform type
     checking at compile time. Each statement is verified for syntactic accuracy
     during compilation. Dynamic languages do not have this which means that
     statements that have not been executed during development have not been
     checked for syntactic accuracy.
  * What happened to the `index.js` file? Don't we need it anymore to run the checks?
    * In this module we're going to be running the checks through the tester.
  * Open the `package.json` file. What is the `devDependencies` section?
    * `devDependencies` are third party modules that are only needed to run the tools
    that we use in the development of the application and are not needed when
    the application gets deployed to production.
  * What is mocha?
    * [mocha](http://mochajs.org/) is a JavaScript test framework.
  * Why does `scripts` now have `test` set to `mocha`?
    * This lets `npm` know how to execute the `npm test` command.
  * How do you add a module to the `devDependencies` section with `npm i`?
    * `npm i <module-name> --save-dev`
  * Open the `test.check-site.js` file. What do `describe()` and `it()` do?
    * `describe()` groups a suite of tests. You can nest multiple `describe()`
    calls. They provide scope for running `before()/beforeEach()/after()/afterEach()`
    hooks.
    * `it()` is the test that you want to run. Tests that require the same hooks
    are usually grouped together in the same `describe()`.
  * Why don't we need to do an `npm i assert` to use the `assert` module?
    * It's a core Node module.
  * Run the test using `npm test`? Why does this work? i.e. How does `npm`
  know to run `mocha`?
    * In the `package.json` file we've set the `test` key in the `scripts`
    object to `mocha`.
  * What is `done()`?
    * It's a callback function that we call once we're done with our test.
    Because most of our tests will make asynchronous calls we need a mechanism
    for telling `mocha` when the test is done and it can move onto the next
    test. We do this by calling the callback that's passed into `it()` which
    is usually called `done`.
    * If all the code in our test is synchronous then we don't need to pass in
    a callback to `it()`.

6. Testing without dependencies
  * What if you were disconnected from the internet or your internet-based
  dependencies is down? How would you test your code?
    * You fake or mock dependencies that might not be available.
  * Take a look a `package.json`. What is `rewire`?
    * [rewire](https://github.com/jhnns/rewire) is a dependency injector for
    testing node.
  * Why are we using `rewire` instead of something more popular like `sinon`?
    * `rewire` is easier to understand. Once you've grasped the concepts of
    `rewire` you'll be ready to try [sinon](http://sinonjs.org/).
  * In `test.check-site.js` what does `__set__()` do?
    * It replaces the functionality in the target module with your local
    functionality.
  * What happens if we change the status that we're faking to something else
  like a 301 or 404?
    * Test test will fail.

7. Generating code coverage
  * What's new in `package.json`?
    * `istanbul` has been added as a dependency.
  * What is `istanbul`?
    * [istanbul](https://github.com/gotwarlost/istanbul) is a code coverage
    tool for Node.
  * What is code coverage?
    * Usually expressed as a percent, it is the amount of your code that's
    covered by tests.
  * Why are we testing the `test.*.js` pattern and not `*.js` for `istanbul`?
  Why aren't we using this pattern for `mocha`?
    * By using a pattern such as `test.*.js` we can exclude files from running
    in tests by given them a name that doesn't match that pattern.
    * We should be using that pattern in for `mocha` as well. We didn't want
    to introduce too many new concepts in that module.
  * Run `npm run istanbul`. Where will you find the results?
    * The results of the tests can be found in the `coverage` directory.
    * A formatted and navigable report can be found in
    `coverage/lco-report/index.html`
  * Which lines are not tested?
    * The `else` condition in `check-site.js`
  * In `check-site.js`, what happens if we change the name of the `callback()` function in the
  error condition to `callbag()`? Will the tests and coverage still run okay?
  (i.e. Do `npm test` and `npm run istanbul` still run okay?)
    * Yes, they run without error.
  * What other tools can we use to protect against this?
    * A linting tool can help protect against misspelled names.
  * How can we modify our test to check the error handling code?
    * By creating a test that fakes an error during the call to `request()`

8. Complete code coverage
  * Take a look at the new test in the test file. What does it do?
    * It fakes a 404 HTTP status code when `request` is called.
  * Run `npm run istanbul`. What does the code coverage look like now?
    * Now should 100% coverage.
  * What happens if we change the name of the `callback()` function in the
  error condition to `callbag()`? Will the tests and coverage still run okay?
    * No, both `mocha` and `istanbul` will report failures.
  * Although they failed, was a coverage report still generated?
    * Yes.























