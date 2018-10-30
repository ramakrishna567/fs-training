const http = require('http');
const host = '127.0.0.1';
const port = '3030';
function OnRequest(req, resp){
    resp.statusCode=200;
    resp.setHeader('type', 'text/plain');
    resp.end("hiiiiiiii");  
    
    }
http.createServer(OnRequest).listen(port, host, function(){
    console.log(`server is running at ${host}:${port}`);
});
