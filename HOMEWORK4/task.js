// task 1
function calcRectangleArea(width, height) {
  try {
    width = Number(width);
    height = Number(height);

    if (isNaN(width) || isNaN(height)) {
      throw new Error('Width and height must be valid numbers.');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Value should not be 0');
    }

    return width * height;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(calcRectangleArea(prompt('a:'), prompt('b:')));

// task 2
function checkAge() {
  let age = prompt('What is your age?');

  try {
    if (age.length == 0) {
      throw new Error('The field is empty! Please enter valid age');
    }

    ageNumber = Number(age);

    if (isNaN(ageNumber)) {
      throw new Error('The field is not a number! Please enter valid age');
    }

    if (ageNumber < 14) {
      throw new Error('Restricted access! You are under 14 years old');
    }

    alert('Access to the movie is granted! Enjoy!');
  } catch (error) {
    alert(`${error.name} occurred, details: ${error.message}`);
  }
}

checkAge();

//task 3
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  try {
    if (isNaN(month) || month <= 0 || month > months.length) {
      throw new MonthException('Incorrect month number');
    }

    return months[month - 1];
  } catch (error) {
    console.log(`${error.name} ${error.message}`);
  }
}

let monthName = showMonthName(+prompt('Enter month number: '));
console.log(monthName);

//task 4
function showUser(id) {
  if (id < 0) {
    throw new Error('Error: ID must not be negative: ');
  }
  return { id: id };
}

function showUsers(ids) {
  let validetedIds = [];
  for (let element of ids) {
    try {
      let user = showUser(element);
      validetedIds.push(user);
    } catch (error) {
      console.log(error.message + element);
    }
  }
  return validetedIds;
}

console.log(showUsers([7, -12, 44, 22]));
