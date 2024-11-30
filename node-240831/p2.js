const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/' ) {
        console.log('Home page');
    }
    else if( req.url==='/shop'){
        console.log('You are on shop')
    }
    else{
        console.log('page not fount')

    }
})

server.listen(4000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running on prt number 4000')
    }
})