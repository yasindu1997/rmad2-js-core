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

//**************** */

var username = "yasindu@gmail.com";
var password = "yasindu@123";

// if(){

// }else if(){

// }else if(){

// }else{

// }

var j = "february"

switch (j) {
    case "january":
        console.log("Output is 1");
        break;
    case "february":
        console.log("Output is 2");
        break;
    case "march":
        console.log("Outpur is 3");
        break;
    default:
        console.log("default");
}


function alertMe() {
    alert("Hello Yasindu !");
}

alertMe();

// *************** loops


console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");
console.log("Hello Yasindu");


for (var i = 100; i > 0; i--) {
    console.log("Hello Yasindu in loop" + i);
}

var r = 10;

while (r > 5) {
    console.log("While Loop");
    r--;
}

var t = 10;

do {
    console.log("do while loop");
    t--;
} while (t > 5);


// ************** arrays

var e = "yasindu";
var ee = "sathsara";
var eee = "Kasun";
var rrr = "Nipun";

const studnts = ["yasindu", "Sathsara", "Kasun", "Nipun", "Sahan"]; //array

console.log(studnts);

console.log(studnts[4]);

const marks = [25.36, 78.25, 80.00, 90.4];
var k = marks[0] + 30;

console.log(k);

for (var p = 0; p < studnts.length; p++) {
    console.log(studnts[p]);
}

for (var f of studnts) { //in
    console.log(f);
}

var u = [[4, 7], [5, 7], [8, 9]];

console.log(u[0][1]);

// *************** OOP - Object Oriented Programming

const shehan = {
    "name": "shehan",
    "adress": "colombo",
    "salary": 250000,
    "tel.no": "0342222222"
}

const dell_inspiron_3576 = {
    "brand": "dell",
    "processor_model": "intel i3",
    "ram": 8,
    "hdd": 1000,
    "color": "black"
}

// JSON

// Event handling and DOM manupulation

function btnClick() {
    var data = document.getElementById('username').value

    console.log(data);
}

function keyDown() {
    console.log("btn down");
}