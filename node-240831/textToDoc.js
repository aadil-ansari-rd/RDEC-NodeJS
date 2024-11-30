const fs = require('fs');
fs.readFile('desc.txt', 'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data, 'data')
        fs.writeFile('desc.doc', data , (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('File has been written successfully')
            }
        })
    }
})
console.log('end....');