const express = require('express');
const app = express();

app.listen(4010, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running on 4010');
    }
})