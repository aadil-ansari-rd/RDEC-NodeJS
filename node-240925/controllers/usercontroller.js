//Includeing table 
const User = require('../models/User');

async function addUser(req, res) {
    try {
        console.log(req.body); // to print the success of requst on console

        let user = new User(req.body);
        await user.save();

        res.end("<h1>Data has been inserted successfully.... </h1>")

    } catch (err) {
        console.log(err);
    }
}

async function getUsers(req,res){
    try{
        let users = await User.find({});
        res.render('userlist', {
            users: users
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addUser,
    getUsers
}