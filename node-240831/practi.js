const fs = require('fs');

fs.writeFileSync('F1.txt', 'raja ram mohan rai');

fs.writeFile('f2.txt', 'sumad and samarj aew here',(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log('written successfully')
    }
})

const data = fs.readFileSync('f1.txt','utf-8');
fs.writeFile('f3.txt', data,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('written successfully');
    }

})

fs.readFile('f2.txt', 'utf-8', (err, data1)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('f4.txt', data1,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('written sucessfully')
            }
        })
    }
})