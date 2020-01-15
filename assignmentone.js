function squareNumber(num) {
    let a = num ** 2;
    return a;   
}
console.log('The result of squaring the number '+ 3 +' is ' +squareNumber(3));


function halfNumber(num) {
    let b = num / 2;
    return b;
}
console.log('Half of '+ 5 +' is ' +halfNumber(5));


function percentOf(num1, num2) {
    let c = (num1/num2) * 100;
    return c;
}
    let num1 = 2
    let num2 = 4

console.log(num1 + ' is ' + percentOf(num1, num2) + '% of ' + num2);


function areaOfCircle(radius) {
    let area = Math.PI * squareNumber(radius);
    return area;
}
let radius = 2
console.log('The area of circle with radius ' + radius + ' is ' + area);



function bonus(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}
