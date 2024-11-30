const express = require('express');
const app = express();

// get => /users/   =>  return all the users
// get => /user/:id =>  return all the particular user
// post => /add/user/ => add new user
// put => /user/ => edit user
// delete => /user => delete user



//http://localhost:4021/add/number/10/20
app.get('/add/number/:fno/:sno', (req, res) => {
    let f1 = req.params.fno;
    let f2 = req.params.sno;
    let result = parseInt(f1) + parseInt(f2);
    res.end('Result ' + result);
})

//http://localhost:4021/simpleInstrest/1000/10/2
app.get('/simpleIntrest/:p/:r/:t', (req, res) => {
    let p = parseInt(req.params.p);
    let r = parseInt(req.params.r);
    let t = parseInt(req.params.t);
    let si = (p * r * t) / 100;
    res.end('Simple Instrest ' + si)
})

//Even or Odd
app.get('/evenOdd/:n', (req, res) => {
    let p = parseInt(req.params.n);
    let r = alert('enter number');
    res.end(parseInt(r));
    if (p % 2 === 0) {
        res.end('Your number is even');
    }
    else {
        res.end('Your number is Odd');
    }
})

 


app.listen(4021, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Server is running on 4021');
    }
})