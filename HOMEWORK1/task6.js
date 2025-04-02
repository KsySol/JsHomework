let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let studyGroup = prompt("What is your study group?");
let yearOfBirth = Number(prompt("What is your year of birth?"));
let isMarried = confirm("Are you married?")

console.log(`Year of birth: ${yearOfBirth}, value type:, ${typeof yearOfBirth}`);
console.log(`Is married: ${isMarried}, value type: ${typeof isMarried}`);
console.log(`${firstName} ${lastName} is studying in group: ${studyGroup}`);

let nullVar = null;
let undefiniedVar = undefined;

console.log(`Value type for ${nullVar}: ${typeof nullVar}`);
console.log(`Value type for ${undefiniedVar}: ${typeof undefiniedVar}`);