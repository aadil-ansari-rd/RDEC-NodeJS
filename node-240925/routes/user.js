//To include and use express for router
const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:false}));/*It is used in an Express.js 
application to parse incoming request bodies that are URL-encoded 
(typically from form submissions).*/

//To include and use the controllers for the routes
const usercontroller = require('../controllers/usercontroller');

router.get('/',(req,res)=>{
    res.render('home');
})

router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res);
})

router.get('/users',(req,res)=>{
    usercontroller.getUsers(req,res);
})

module.exports= router;
