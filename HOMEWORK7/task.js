//task 1
// let myWindow = window.open('', '', 'width=300,height=300');
// setTimeout(() => myWindow.resizeTo(500, 500), 2000);
// setTimeout(() => myWindow.moveTo(200, 200), 4000);
// setTimeout(() => myWindow.close(), 6000);

//task 2
function changeCSS() {
  const paragraph = document.getElementById('changeStyleButton');
  paragraph.style.color = 'orange';
  paragraph.style.fontSize = '20px';
  paragraph.style.fontFamily = 'Comic Sans MS';
}

document
  .getElementById('changeStyleButton')
  .addEventListener('click', changeCSS);

//task 3
document.getElementById('firstButton').addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
});

document
  .getElementById('secondButton')
  .addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'pink';
  });

const holdButton = document.getElementById('thirdButton');

holdButton.addEventListener('mousedown', function () {
  document.body.style.backgroundColor = 'SaddleBrown';
});

holdButton.addEventListener('mouseup', function () {
  document.body.style.backgroundColor = 'white';
});

const link = document.getElementById('yellow');

link.addEventListener('mouseenter', function () {
  document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseleave', function () {
  document.body.style.backgroundColor = 'white';
});

//task 4
document.getElementById('deleteBtn').addEventListener('click', function () {
  const select = document.getElementById('dropList');
  const selectedIndex = select.selectedIndex;
  select.remove(selectedIndex);
});

//tast 5
const button = document.getElementById('LiveButton');
const messageList = document.getElementById('message');

function append(message) {
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  messageList.appendChild(newMessage);
}

button.addEventListener('click', function () {
  append('I was pressed!');
});

button.addEventListener('mouseover', function () {
  append('Mouse on me!');
});

button.addEventListener('mouseout', function () {
  append('Mouse is not on me!');
});

//task 6
const size = document.getElementById('size');

function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  size.textContent = `Width: ${width}, Height: ${height}`;
}

updateSize();

window.addEventListener('resize', updateSize);

//task 7
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const infoDisplay = document.getElementById('selected');

const cities = {
  ger: ['Essen', 'Keln', 'Hamburg'],
  usa: ['California', 'Texas', 'Illinois'],
  ukr: ['Chernivtsi', 'Lviv', 'Kharkiv'],
};

function updateCityList() {
  const country = countrySelect.value;
  citiesSelect.innerHTML = '';

  if (country && cities[country]) {
    cities[country].forEach(city => {
      const option = document.createElement('option');
      s;
      option.value = city;
      option.textContent = city;
      citiesSelect.appendChild(option);
    });
  }

  infoDisplay.textContent = '';
}

function updateSelectedInfo() {
  const country = countrySelect.value;
  const city = citiesSelect.value;
  infoDisplay.textContent = `${
    countrySelect.options[countrySelect.selectedIndex].text
  }, ${city}`;
}

countrySelect.addEventListener('change', function () {
  updateCityList();
  updateSelectedInfo();
});

citiesSelect.addEventListener('change', updateSelectedInfo);
