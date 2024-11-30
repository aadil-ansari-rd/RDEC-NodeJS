//it has routes that is connected with controllers
const express = require('express');
const studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.json());

router.post('/add/student', (req , res )=>{
    studentcontroller.addStudent(req,res);
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudent(req,res);
})
router.get('/student/:rollNo',(req,res)=>{
    studentcontroller.getStudentP(req,res);
})
module.exports= router ;