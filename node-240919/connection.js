const mangoose= require('mongoose');


async function connection(){
    try{
        await mangoose.connect('mongodb://localhost:27017/batch-3');
        console.log('database connected')
    }catch(err){
        console.log(err);
    }
}
module.exports = connection;