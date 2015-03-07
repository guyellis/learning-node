
var http = require('http');

http.get('http://www.yahoo.com', function(response){
  console.log('www.yahoo.com: ', response.statusCode);
});
