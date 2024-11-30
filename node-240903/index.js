const express = require('express');
const users = require('./users.json')
const app = express();
const fs = require('fs');
app.use(express.json());


//http://localhost:4021/users
app.get('/users', (req, res) => {
    res.json(users);
})

//http://localhost:4021/user/3
app.get('/user/:id', (req, res) => {
    let id = parseInt(req.params.id);  // aane wali id
    let user = users.find((user) => user.id === id);
    console.log(user, 'user');
    res.json(user);
})

//http://localhost:4021/add/user
app.post('/add/user', (req, res) => {
    console.log(req.body);
    req.body.id = users.length + 1;
    users.push(req.body);//new users have 31 users
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("Problem...");
        }
        else {
            console.log('File has been added')
            res.end('user added')
        }
    })
})

//http://localhost:4021/edit/user/11
app.put('/edit/user/:id',(req, res)=>{
    let id = parseInt(req.params.id);
    let index = users.findIndex((user)=>user.id===id)
    console.log(index)
    users[index].first_name= 'ram ji';
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("Problem...");
        }
        else {
            console.log('File has been added')
            res.end('user updated')
        }
    })
})

//http://localhost:4021/delete/user/6
app.delete('/delete/user/:id',(req, res)=>{
    let id = parseInt(req.params.id)
    console.log(id)
    let index = users.findIndex((user)=> user.id === id)
    console.log(index);
    users.splice(index, 1);
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("Problem...");
        }
        else {
            console.log('File has been added')
            res.end('user deleted')
        }
    })
    
})


app.listen(4021, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Server is running on 4021');
    }
})