const http = require('http');
const host = '127.0.0.1';
const port = '3030'
var server=http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-Type','text/plain');
    response.end("Hello Node Server Welcome to npm!!");

});
server.listen(port,host, function(){
    console.log(`server is running at http://${host}:${port}`);
});