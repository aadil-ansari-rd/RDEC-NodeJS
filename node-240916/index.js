const express = require('express');
const user = require('./routes/user')
const app = express();
app.use(user);




app.listen(4024,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port 4024");
    }
})