require("dotenv").config();
const http=require("node:http");
//const port=8080;
const host='http://127.0.0.1';

http.createServer((req,res)=>{
     
     if( req.url=="/" ){
          //res.statusCode=200;
          //res.setHeader('Content-Type','text/html');
          res.writeHead(200,{'Content-Type':'text/html'});
          //res.write("Hello HTTP");
          //res.end("Hello HTTP");
          res.write(`<h1>Hello HTTP Server ${req.headers.host}</h1>`)
     }
     else{
          res.writeHead(404,{'Content-Type':'text/html'});
          res.write(`<h1>Page Not Found</h1>`)
     }
     res.end();
}).listen(process.env.PORT,()=>{
     console.log(`App server running at ${host}:${process.env.PORT}`);
});

