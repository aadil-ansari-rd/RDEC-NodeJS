function simpleIntrest(principle , rate, time){
    return (principle*rate*time)/100;
}
function average(num1, num2, num3){
    return (num1 + num2+ num3)/3;
}
module.exports = {
    simpleIntrest,
    average
}