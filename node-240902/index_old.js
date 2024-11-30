// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// let server = http.createServer((req, res)=>{

//     let newUrl = url.parse(req.url, true);
//     console.log(newUrl); 


//     //for lof file 
//     let d = new Date();
//     console.log(d.toLocaleString());
//     let data = newUrl.pathname + ' ' +d.toLocaleString()+ '\n' ;
//     fs.appendFile('log.txt', data , (err)=>{
//         console.log('File has been written');
//     })
//     //


//     if(newUrl.pathname ==='/'){
//         res.end('hello from end page...')
//     }
//     else if (newUrl.pathname ==='/home'){
//         let a = newUrl.toString();
//         let b = newUrl.pathname.toString()
//         res.end("Response from home page" + a + b);
        
//     }
//     else if (newUrl.pathname ==='/add/number'){
//         let n1 = parseInt(newUrl.query.Fnum);
//         let n2 = parseInt(newUrl.query.Snum);
//         let c = n1+ n2;

//         res.end("Result  " + c);
//     }
//     else if (newUrl.pathname ==='/welcome'){
//         let name = parse(newUrl.query.name);
        

//         res.end("Hello " + name + "Welcome to my world" );
//     }
//     else if (newUrl.pathname ==='/simpleIntrest'){
//         let p = parseInt(newUrl.query.p);
//         let r = parseInt(newUrl.query.r);
//         let t = parseInt(newUrl.query.t);
//         let si = (p*r*t)/100;

//         res.end("Simple Intrest  " + si);
//     }
//     else{
//         res.end('page not found');
//     }
// })




// server.listen(4001, (err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log('Server is running on 4001')
//     }
// } )