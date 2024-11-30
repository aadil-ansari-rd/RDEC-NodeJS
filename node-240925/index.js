//To include and use express
const express = require('express');
const app = express();

//Including in-built path module
const path = require('path'); 

//To include and use routes
const user = require('./routes/user');
app.use(user);

//To include and use connection
const connection = require('./connection');
connection();


app.set('view engine', 'ejs');

//Making server post
app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
})

