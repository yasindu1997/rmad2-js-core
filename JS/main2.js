// arithmatic operators

const x = 10;
const y = 14;

const z = x + y;
console.log(z);

const m = x * y;
console.log(m);

const s = y - x;
console.log(s);

const d = y / x;
console.log(d);

console.log("Value is : " + z);

// js data types

//numbers
var f = 20;

//string
var r = "Yasindu";

//object
var yasindu = {
    "name": "Yasindu",
    "age": 25,
    "salary": "250000"
}

//undefined
var k;

//boolean
var b = true;

// js functions

const number1 = 10;
const number2 = 20;

console.log(number1 + number2);

var p = "hello world";

var isConnected = true;

const number3 = 45;
const number4 = 50;

console.log(number3 + number4);

// parameterized function

function getSum(x, y) {
    console.log("From Method : " + (x + y));
}

getSum(24, 47);

getSum(23, 57);


// normal function

function greet() {
    var today = new Date();
    console.log("Today is - " + today);
}

greet();

greet();

function getMultiply(x, y, z) {
    const answer = x * y * z;
    return answer;
}

const c = getMultiply(10, 5, 9);

console.log(c);

function seeGreet() {
    document.getElementById('greet').innerHTML = "Good Evening All";
}

var age = 25;

function getAge(x) {
    return "Your age is " + x;
}

var answer = getAge(age);

console.log(answer);

// *******************

const getName = function (c) {
    console.log(c);
}

getName(10);

const getAddress = (k) => {
    console.log(k);
}

getAddress("Panadura");

// *****************

var customer_age = 26;

var customer_age2 = 26;


// logical operators <,>,==,&,|

if (customer_age > 26 || customer_age2 == 25) {
    console.log("Age Ok");
}
else if (customer_age2 == 26) {

}
else {
    console.log("Age Not Ok");
}

console.log("end");



