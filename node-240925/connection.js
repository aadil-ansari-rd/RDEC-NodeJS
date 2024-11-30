//To connect the server with mongoDB we need a connection , so we need mongoose 

const mongoose = require('mongoose');


//Making a function for connection the server with the mongoDB

async function connection(){
    try{
        await mongoose.connect('mongodb://localhost:27017/users');
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

module.exports=connection;