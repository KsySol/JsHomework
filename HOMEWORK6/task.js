//task 1
let tittle = document.getElementById('test');
let tittleByQuerySelector = document.querySelector('#test');
console.log(tittle);
tittle.textContent = 'Last';
console.log(tittle);
console.log(tittleByQuerySelector);

//task 2
let element = document.getElementsByClassName('image')[0];
element.src = 'cat.jpg';
alert(element.outerHTML);

// task 3
let allElements = document.querySelectorAll('#text p');
console.log(allElements);

allElements.forEach((paragraph, index) => {
  console.log(`Selector text ${index}: ${paragraph.textContent}`);
});

//task 4
let allElementsTask4 = document.querySelector('#list');
console.log(allElementsTask4.firstElementChild.textContent);
console.log(allElementsTask4.lastElementChild.textContent);
console.log(allElementsTask4.children[1].textContent);
console.log(allElementsTask4.children[3].textContent);
console.log(allElementsTask4.children[2].textContent);

let childElements = allElementsTask4.getElementsByTagName('p');
let order = [0, 4, 1, 3, 2];
order.forEach(index => {
  console.log(childElements[index].textContent);
});

// task 5
document.getElementsByTagName('h1')[0].style.backgroundColor = '#90EE90';
let childElementsTask5 = document.getElementById('myDiv');
childElementsTask5.firstElementChild.style.fontWeight = 'bold';
childElementsTask5.children[1].style.color = 'red';
childElementsTask5.children[2].style.textDecoration = 'underline';
childElementsTask5.children[3].style.fontStyle = 'italic';

const myList = document.getElementById('myList');
const texts = Array.from(myList.children).map(li => li.textContent);
const line = texts.join('');

const div = document.createElement('div');
div.style.textAlign = 'center';
div.textContent = line;
myList.replaceWith(div);

document.querySelector('span').style.visibility = 'hidden';

//task 6
let input1 = prompt("Text1:");
let input2 = prompt("Text2:");
let inputDocument1 = document.getElementById("input1");
let inputDocument2 = document.getElementById("input2");
inputDocument1.value = input1;
inputDocument2.value = input2;

let tempVar = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = tempVar;

//task 7

const main = document.createElement("main");
main.className = "mainClass check item";
const divtask7 = document.createElement("div");
divtask7.id = "myDiv";

const p = document.createElement("p");
p.textContent = "First paragraph";

divtask7.appendChild(p);
main.appendChild(divtask7);
document.body.appendChild(main);
