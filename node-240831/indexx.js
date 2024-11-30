const fs = require('fs');

//ASYNCHRONOUS METHOD
// fs.writeFileSync('hello.xls', 'hello india....'); //synchronouse method or block code // first parameter is file name 
// //with extension that is to be created , second parameter will tell the content of the 
// //file created.
// console.log('File has been written successfully');



//ASYNCHRONOUS METHOD
// fs.writeFile('hello.xls', 'hello Bharat....', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File has been written successfully");
//     }
// })
// console.log("end....")

// const data = fs.readFileSync('hello.txt ','utf-8');
// console.log(data , 'data');
// console.log('end...');

fs.readFile('hello.txt'/*file name */, 'utf-8'/*encoding scheme */ ,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data, 'data')
    }
})
console.log('end....');