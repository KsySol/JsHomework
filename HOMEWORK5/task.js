//task 1

function propsCount(obj) {
  return Object.keys(obj).length;
}

let mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
};

console.log(propsCount(mentor));

// task 2
function showProps(obj) {
  let keys = [];
  let values = [];
  for (const [key, value] of Object.entries(obj)) {
    keys.push(key);
    values.push(value);
  }
  console.log(keys);
  console.log(values);
}

function showPropsV2(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

let obj = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
  size: 5,
  certificated: true,
};

showProps(obj);
showPropsV2(obj);

//task 3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    console.log(`${this.name} ${this.surname} ${midleName}`);
  }

  showCourse() {
    let course = new Date().getFullYear() - this.year;
    if (course == 0) {
      return 1;
    } else if (course > 6) {
      return 6;
    } else {
      return course;
    }
  }
}

const stud = new Student('Petro', 'Petrenko', 2015);
console.log(stud.showFullName('Petrovych'));
console.log('Current course: ' + stud.showCourse());

// 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості:
// fullName (ім’я і прізвище), dayRate (ставка за день роботи),
// workingDays (кількість відпрацьованих днів).

//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
// Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.

//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати –
// створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.

//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 	4) Вивести значення зарплати з новим experience.
// 	5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value
// 	6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

//task 4
class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  calculateSalaryWithExperience() {
    return this.dayRate * this.workingDays * this.#experience;
  }

  showSalaryWithExperience() {
    let salary = this.calculateSalaryWithExperience();
    console.log(`${this.fullName} salary: ${salary}`);
  }

  set experience(value) {
    this.#experience = value;
  }

  get experience() {
    return this.#experience;
  }
}

function setNewExperienceAndRecalculate(worker, newExperience) {
  console.log(worker.fullName);
  worker.showSalary();
  console.log('New experience: ' + worker.experience);
  worker.showSalaryWithExperience();
  worker.experience = newExperience;
  console.log('New experience: ' + worker.experience);
  worker.showSalaryWithExperience();
}

function sortWorkers() {
  const workers = Array.from(arguments);

  sorted = workers.sort(
    (a, b) =>
      a.calculateSalaryWithExperience() - b.calculateSalaryWithExperience()
  );

  for (let worker of sorted) {
    console.log(
      `${worker.fullName}: ${worker.calculateSalaryWithExperience()}`
    );
  }
}

let worker1 = new Worker('John Johnson', 20, 23);
setNewExperienceAndRecalculate(worker1, 1.5);

let worker2 = new Worker('Tom Tomson', 48, 22);
setNewExperienceAndRecalculate(worker2, 1.5);

let worker3 = new Worker('Andy Ander', 29, 23);
setNewExperienceAndRecalculate(worker3, 1.5);
console.log('Sorting...');
sortWorkers(worker1, worker2, worker3);

//task 5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }

  getArea() {
    return 0.5 * this.a * this.h;
  }
}
class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    return this.a ** 2;
  }
}
class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce((sum, figure) => {
    if (figure instanceof GeometricFigure) {
      const area = figure.getArea();
      console.log(
        `Geometric Figure: ${figure.constructor.name} - area: ${area}`
      );
      return sum + area;
    } else {
      return sum;
    }
  }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
