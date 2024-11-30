const users = require('../users.json');
function getUser(req, res) {
    try {
        res.json(users);
    } catch (err) {
        console.log(err);
    }
}
function getParticularUser(req, res) {
    try {
        let id = parseInt(req.params.id);
        let user = users.find((user) => user.id === id);
        res.json(user);

    } catch (err) {
        console.log(err);
    }
}
function postUser(req, res) {
    try {
        req.body.id = users.length +1;
        users.push(body);
        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("User added ");
                res.end('User added');
            }
        })

    } catch (err) {
        console.log(err);
    }
}
// try{

// }catch(err){
//     console.log(err);
// }
module.exports = {
    getUser,
    getParticularUser,
    postUser
}