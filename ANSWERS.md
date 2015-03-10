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
    

