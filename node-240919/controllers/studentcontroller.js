const Student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log('data saved sucessfully ');
        res.end('data added...');

    }catch(err){ 
        console.log(err);
    }
    
}
async function getStudent(req, res){
    try{
        let students = await Student.find({});//it will take all data
        console.log(students);
        res.send(students);
    }catch(err){
        console.log(err);
    }
}
async function getStudentP(req,res){
    try{
        let rollNo= parseInt(req.params.rollNo);
        let student = await Student.findOne({rollNo:rollNo});
        console.log(student);
        res.send(student);
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudent,
    getStudentP
}