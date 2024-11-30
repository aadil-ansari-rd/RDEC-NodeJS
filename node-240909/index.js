const express = require('express');
const app = express();

const emps =require('./emps.json');
const fs = require('fs');

app.use(express.json());

//Get all data

app.get('/employee', (req, res)=>{
    res.json(emps);
})

//Get Selected data 
app.get('/employee/:sal',(req, res)=>{
    let salary = parseInt(req.params.sal);
    let emp = emps.filter((emp)=> emp.salary > salary);
    console.log(emp,"Employees");
    res.json(emp);
})

//To add a new employee

app.post('/add/emp', (req,res)=>{

    req.body.id = emps.length + 1;
    emps.push(req.body);
    fs.writeFile('emps.json', JSON.stringify(emps) , (err)=>{
        if(err){
            console.log(err);

        }else{
            console.log("File has been added");
            res.end('emp added')
        }
    })
    
})

//To edit a employee
app.put('/edit/emp/:id',(req, res)=>{
    let id = parseInt(req.params.id);
    let index = emps.findIndex((emp)=>emp.id===id);
    console.log(index);
    emps[index].first_name = "Raj Kumar";
    fs.writeFile('emps.json', JSON.stringify(emps),(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Employee update written sucessfully");
            res.end("Employee updated")
        }
    })
})


//To delete an employee

app.delete('/delete/emp/:id',(req, res)=>{
    let id =  parseInt(req.params.id);
    let index = emps.findIndex((emp)=>emp.id===id);
    console.log(index);
    emps.splice(index, 1);
    fs.writeFile('emps.json',JSON.stringify(emps),(err)=>{
        if(err){
            console.log(err);

        }else{
            console.log("File written sucessfully");
            res.end("Employee deleted");
        }
    })
})



app.listen(4022,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on 4022");

    }
})