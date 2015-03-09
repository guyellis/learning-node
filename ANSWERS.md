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
	  *