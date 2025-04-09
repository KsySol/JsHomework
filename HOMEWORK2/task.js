// task 1


let x = 1;
let y = 2;

let res1 = x + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x-y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number(Boolean(x) + String(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task 2

const inputNumber = +prompt("Enter the number:");
console.log(`Positive even number: ${inputNumber>0 && inputNumber%2==0}`);
console.log(`Multiple of 7: ${inputNumber%7==0}`);

//task 3

const array = [];
array.push(1);
array.push("Str");
array.push(true);
array.push(null);

console.log(`Array size: ${array.length}`);

array.push(prompt("Enter value for 5th element of array:"));
console.log(`5'th element of array =  ${array[4]}`);

array.shift();
console.log(`Final array: ${array}`);

//task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(String(cities).replaceAll(",", "*"));

//task 5
let age = prompt("How old are you?");
console.log(age>=18? "Ви досягли повнолітнього віку": "Ви ще надто молоді");

//task 6
let a = +prompt("The first side of the triangle length:");
let b = +prompt("The second side of the triangle length:");
let c = +prompt("The third side of the triangle length:");

if(a>0 && b>0 && c>0 && !Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)){
    const P = (a+b+c)/2;
    const S = Math.sqrt(P*(P-a)*(P-b)*(P-c));
    console.log(`Площа трикутника: ${Math.round(S * 1000) / 1000}`);

    const triangle = [a, b, c];
    console.log(triangle.sort((a, b) => a - b));
    let hypotenuse = triangle[2];
    let isItRightTriangle = Math.pow(hypotenuse, 2) === (Math.pow(triangle[0], 2) + Math.pow(triangle[1], 2));
    console.log("Is it right triangle: " + isItRightTriangle);
} else {
    console.log("Incorrect data");
}


//task 7
let currentHour = new Date().getHours();
console.log(currentHour);

if (currentHour >= 5 && currentHour < 11){
    console.log("Доброго ранку");
} else if (currentHour >= 11 && currentHour < 17){
    console.log("Доброго дня");
} else if (currentHour >= 17 && currentHour < 23){
    console.log("Доброго вечора");
} else {
    console.log("Доброї ночі");}

switch (true){
    case(currentHour >= 5 && currentHour < 11):
    console.log("Доброго ранку");
    break;
    case(currentHour >= 11 && currentHour < 17):
    console.log("Доброго дня");
    break;
    case(currentHour >= 17 && currentHour < 23):
    console.log("Доброго вечора");
    break;
    default:
        console.log("Доброї ночі");
}