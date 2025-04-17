//task 1
const arr = [2,3,4,5];
multiplicationResFor = 1;

for (let i = 0; i < arr.length; i++){
    multiplicationResFor*=arr[i];
}
console.log(multiplicationResFor);

multiplicationResWhile = 1;
let i = 0;
while(i < arr.length){
    multiplicationResWhile*=arr[i];
    i++;
}

console.log(multiplicationResWhile);

// task 2
for(let i = 0; i < 15; i++){
    if (i%2==0){
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}

// task 3
 function randArray(k){
    let arr = [];
    for(let i =0; i< k; i++){
    arr.push( Math.floor(Math.random() * (500 - 1 + 1)) + 1);
    }
    return arr;
 }
 console.log(randArray(5));

 //task 4
 let a = +prompt("Please enter a number:");
 let b = +prompt("Please enter a power of number:");

 function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return Math.pow(a, b);
    }
        console.log("Функція працює тільки з цілими числами");
    }

 console.log(raiseToDegree(a, b));

//task 5
function findMin(){
    return Math.min(...arguments);
}

console.log(findMin(1,2,3,5,-2));

//task 6
function findUnique(arr){
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
    
        if (temp.includes(arr[i])) {
            return false;
        }
        temp.push(arr[i]);
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

//task 7
function lastValue(arr, x = 1){
  return arr.slice(arr.length-x, arr.length);
}

console.log(lastValue([3, 4, 10, -5]));
console.log(lastValue([3, 4, 10, -5], 2));
console.log(lastValue([3, 4, 10, -5], 8));

//tak 8
function capitalize(str) {
    let item = str.split(' ');
    for (let i = 0; i < item.length; i++) {
      if (item[i]) {
        item[i] = item[i].charAt(0).toUpperCase() + item[i].slice(1);
      }
    }
    return item.join(' ');
  }
  
  console.log(capitalize("i love java script"));

