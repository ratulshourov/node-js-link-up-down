/**
 * 
 */

const http=require('http');
const url=require('url');
//app object module scaffolding
const app ={};
//confuguration
app.config={
    port:'3000'
};
//create server 
app.createServer=()=>{
    const server=http.createServer(app.handleRequest);
    server.listen(app.config.port,()=> {
        console.log(`running ${app.config.port}`);
    })
}

// request response 

app.handleRequest=(req,res)=>{
res.end('hello worlds!');
const parse =url.parse(req.url,true);
const pathname=parse.pathname;
const trimPath=pathname.replace(/^\/+|\/+$/g, '');
const headerObject=req.headers;
console.log(headerObject);
}

app.createServer();