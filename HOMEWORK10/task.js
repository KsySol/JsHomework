//task 1
const http = require('http');
const os = require('os');
const path = require('path');

const curentUser = os.userInfo().username;
const osType = os.type();
const workTime = Math.floor(os.uptime() / 60);
const currentDirectory = __dirname;
const fileName = path.basename(__filename);

http
  .createServer((request, response) => {
    response.writeHead(200, 'Content-Type: text/plain');
    response.write('<h1>System information</h1>');
    response.write(`Current user name: ${curentUser}<br>`);
    response.write(`OS type: ${osType}<br>`);
    response.write(`System work time: ${workTime} minutes <br>`);
    response.write(`System work directory: ${currentDirectory}<br>`);
    response.write(`Server file name: ${fileName}<br>`);
    response.end();
  })
  .listen(5000);

console.log('Server is listening on port... http://localhost:5000');

//task 2
const { getGreeting } = require('./personalmodule');

const httpTask2 = require('http');
const osTask2 = require('os');

httpTask2
  .createServer((request, response) => {
    response.writeHead(200, 'Content-Type: text/plain');
    response.write(getGreeting(osTask2.userInfo().username));
    response.end();
  })
  .listen(5001);

console.log('Server is listening on port... http://localhost:5001');
