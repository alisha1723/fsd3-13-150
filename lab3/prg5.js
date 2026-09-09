import http from 'http'

const server = http.createServer((req,res)=>{
    //req methode -> GET, POST,PUT,DELETE,PATCH
    console.log('methode: ', req.method);
    console.log("URL:", req.url);

    // browser can send only GET request to the server 
    // POST/PUT/PATH/DELETE -> can be checked by api tester
    //API tester :- postman , echo api, thunder client
});