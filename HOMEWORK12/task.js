//task1

function upperCase(str) {
  let regExp = /^[A-Z]/;
  console.log(
    `String ${
      regExp.test(str) ? 'starts' : 'does not start'
    } with an uppercase character`
  );
}

upperCase('regexp');
upperCase('RegExp');

//task2
function checkEmail(str) {
  let regExp = /^\S+@\S+\.\S+$/;
  console.log(regExp.test(str));
}

checkEmail('Qmail2@gmail.com');

//task3
const regex = /d(b+)(d)/gi;
const str = 'cdbBdbsbz';
let match;
while ((match = regex.exec(str)) !== null) {
  console.log(match);
}

//task4
function swapSubstrings(str) {
  console.log(str.replace(/^(\w+)\s+(\w+)$/, '$2, $1'));
}

swapSubstrings('Java Script');
swapSubstrings('2 1');

//task5
function isValidCardNumber(cardNumber) {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  if (!regex.test(cardNumber)) return false;

  const digits = cardNumber.replace(/-/g, '');

  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let digit = parseInt(digits[15 - i], 10);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}

console.log(isValidCardNumber('4539-1488-0343-6467'));
console.log(isValidCardNumber('9999-9999-9999-9999'));

//task6
function checkEmailTask6(email) {
  const regex =
    /^[A-Za-z0-9](?!.*--)[A-Za-z0-9_-]*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
  console.log(`Email is ${regex.test(email) ? 'correct!' : 'not correct!'}`);
}
checkEmailTask6('my_mail@gmail.com');
checkEmailTask6('#my_mail@gmail.com');
checkEmailTask6('my_ma--il@gmail.com');

//task7
function checkLogin(login) {
  const numbers = login.match(/\d+(\.\d+)?/g) || [];
  let loginWithoutNumbers = login;
  for (const num of numbers) {
    loginWithoutNumbers = loginWithoutNumbers.replace(num, '');
  }

  const isValid =
    /^[A-Za-z][A-Za-z]*$/.test(loginWithoutNumbers) &&
    login.length >= 2 &&
    login.length <= 10;

  console.log(isValid);
  console.log(numbers.join(', '));
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
