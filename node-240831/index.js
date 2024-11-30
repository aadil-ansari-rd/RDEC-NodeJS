const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('thiss is root page')
    }
    else if(req.url==='/home'){
        res.end('This is home page')
    }
    else if( req.url==='/contact'){
        res.end('this is contact page')
    }
    else{
        res.end('error page 404...')
    }
   
})

server.listen(3001, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on port 3001");
    }
})

