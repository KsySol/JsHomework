//task 1

function getPromise(message, timeout) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(message);
    }, timeout);
  });
}

getPromise('test promise', 2000).then(function (data) {
  console.log(data);
});

//task 2
function calcArrProduct(numbers) {
  return new Promise(function (resolve, reject) {
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
      if (!Number.isFinite(numbers[i]) && numbers[i] != 0) {
        reject('Error! Incorrect array!');
        return;
      }
      product *= numbers[i];
    }

    resolve(product);
  });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, 'user2', 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"

//task 3

const delay = (i, time) =>
  new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbers() {
//   let chain = Promise.resolve();

//   for (let i = 0; i <= 10; i++) {
//     const randomDelay = Math.floor(Math.random() * 3000);

//     chain = chain.then(() => {
//       return delay(i, randomDelay).then(result => {
//         console.log(result);
//       });
//     });
//   }
//

//task 3
async function showNumbers() {
  for (let i = 0; i <= 10; i++) {
    const randomDelay = Math.floor(Math.random() * 3000);
    console.log(await delay(i, randomDelay));
  }
}
showNumbers();
