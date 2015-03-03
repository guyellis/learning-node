# Learning Node

Code to accompany Learning Node.js

# Modules

01. A simple client checking a site's status
  * Create file
	* Run and expect error
	* `npm install request`
	* Why is this type of utility of value?

02. Check status of multiple sites
  * Why are both returning 200?
  * What needs to be changed to get a 301? i.e. how is `request` "helping?"
  * What order are the results returned in? Is this predictable?

03. Testing
  * What is `module` and `module.exports`?
  * Why is testing important in a non-static language?
	* Make the file testable
	* Add a test

04. Testing without dependencies
  * What if you were disconnected from the internet? How would you test your code?
  * How would you test your error handling code?

05. Generating code coverage
  * Which lines are not tested?
  * What happens if we change the name of the "callback" function in the error condition?
  Does `npm test` still run okay?
  * What other tools can we use to protect against this?

06. Complete code coverage
  *

Extra:
* Keeping node up-to-date and switching versions:
  * n and nvm
* Deploying multiple versions of node using nvm (bucketed deployments)

