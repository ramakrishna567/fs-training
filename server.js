const http = require('http');
const host = '127.0.0.1';
const port = '3030'
var server=http.createServer((request,response)=>{
    // console.log("Request Obj",request);    
    console.log("Request Obj",request.url);    
    console.log("Request Obj",request.method);
    
    //URL MAPPING
    if(request.url == '/' && request.method == 'GET'){
        response.statusCode=200;
        response.setHeader('content-Type','text/plain');
        response.end("Hello Node Server Welcome to npm!!");
    }
    else if(request.url == '/home'&& request.method == 'GET'){
        response.statusCode=200;
        response.setHeader('content-Type','text/plain');
        response.end("Welcome to Home page!!");
    }
    else if(request.url == '/users' && request.method == 'GET'){
        var john = {
            name : "john",
            age : 25,
            email : "john@gmail.com"
        }
        response.statusCode=200;
        response.setHeader('content-Type','application/json');
        response.end(JSON.stringify(john));
    }
      else if(request.url == '/data' && request.method == 'POST'){
        response.statusCode=200;
        response.setHeader('content-Type','text/plain');
        response.end("Welcome to Home world data page");
    }else{
        response.statusCode=404;
        response.setHeader('content-Type','text/plain');
        response.end("url not found");
    }


});
server.listen(port,host, function(){
    console.log(`server is running at http://${host}:${port}`);
});