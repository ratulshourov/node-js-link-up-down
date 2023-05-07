/**
 * 
 */

const http=require('http');
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
}

app.createServer();