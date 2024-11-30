const math = require('../math');
function show(){
    let c = math.add(4,4);
    console.log(c, 'c in tri1');
    let d = math.subtract(10,6);
    console.log(d, 'd in tri1')
}
module.exports = {
    show
}