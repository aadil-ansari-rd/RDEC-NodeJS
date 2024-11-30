const http = require('http');
const url = require('url');


//activities on urls
let server = http.createServer((req, res)=>{
    let newUrl = url.parse(req.url, true);
    console.log()


    //http://localhost:4001
    if(req.url==='/'){
        res.end('hello from end page...')
    }

    //http://localhost:4001/home

    //http://localhost:4001/home?name=ram&password=12345  
    // it will show page not fount instead of showing " Response from home page"

    else if (req.url=='/home'){
        res.end("Response from home page");
    }
    else{
        res.end('page not found');
    }
})



//this will run server , this is only writtenn in index.js
server.listen(4001, (err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log('Server is running on 4001')
    }
} )