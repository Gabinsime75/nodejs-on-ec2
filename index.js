var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome in the  Cloud. THis is CICD Pipeline Demo, go through till the end'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
