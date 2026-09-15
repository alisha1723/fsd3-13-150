import http from 'http'

const server = http.createServer((req,res)=>{
    //req methode -> GET, POST,PUT,DELETE,PATCH
    console.log('methode: ', req.method);
    console.log("URL:", req.url);

    // browser can send only GET request to the server 
    // POST/PUT/PATH/DELETE -> can be checked by api tester
    //API tester :- postman , echo api, thunder client

    if(req.url === '/'){
        res.setHeader("content-type","text/html");
        res.end("<h1> Hello Server</h1>")


    }
    else if (req.url === "/products"){
        const products = [
            { id: 1, name: "bottle" },
            { id: 2, name: "Laptop" },
        ];
        res.writeHead(200,{"content-type": "application/json"});
        res.end(JSON.stringify(products));
    }
    else{
        res.end();
    }
});

server.listen(5000, () =>console.log("prg5 is running"));