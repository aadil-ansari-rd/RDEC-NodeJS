//MATH
const math = require('./math');
console.log(math , 'math');
let c = math.add(4,6);
console.log("Sum",add);
let sub = math.subtract(10,4);
console.log("Substract", sub);

//CALCULATION
const calculation = require('./calculation');
let si = calculation.simpleIntrest(1000, 10, 2);
let avg = calculation.average(10, 20, 30);
console.log('Simple Intrest' , si);
console.log('Average', avg);

//TRI
const tri = require('./test/tri');
let multiply = tri.multiply(10,20);
console.log("multiply :", multiply)
let divide = tri.divid(20, 10);
console.log("divide :", divide);

//TRI1

const tri1 = require('./test/tri1');
let show = tri1.show();
console.log(show);
