// task 1
let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//task 2
let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//task 3
function mul(...rest) {
  let numbers = rest.filter(Number.isFinite);
  return numbers.length === 0 ? 0 : numbers.reduce((acc, num) => acc * num, 1);
}

console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0

//task 4
let server = {
  data: 0,
  convertToString(callback) {
    callback(() => this.data + '');
  },
};

let client = {
  server: server,
  result: '',
  calc(data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification() {
    return callback => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//task 5
const mapBuilder = (arr1, arr2) =>
  new Map(arr1.map((key, i) => [key, arr2[i]]));

let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
