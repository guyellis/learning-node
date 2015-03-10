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
  * What is `'use strict'`?
    * It is a way to opt in to a restricted variant of JavaScript.
    * It will help you catch coding mistakes. Use it.
    * [Mozilla explains strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
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

