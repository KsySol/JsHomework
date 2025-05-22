//task 1

const http = require('http');

const html = `
<!DOCTYPE html>
<body>
  <button id="button">Vote!</button>
  <script>
    document.getElementById('button').addEventListener('click', () => {
      const ajaxRequest = new XMLHttpRequest();
      ajaxRequest.open('GET', '/vote', true);
      ajaxRequest.onload = () => {
        if (ajaxRequest.status === 200) {
          document.getElementById('button').textContent = ajaxRequest.responseText;
        }
      };
      ajaxRequest.send();
    });
  </script>
</body>
</html>
`;

http
  .createServer((request, response) => {
    if (request.url === '/vote') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(`Your vote is accepted: ${new Date()}`);
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(html);
  })
  .listen(5000, () => {
    console.log('Server is running... http://localhost:5000');
  });

//task 2

const httpTask2 = require('http');
const fs = require('fs');
const path = require('path');

const htmlTask2 = `
<!DOCTYPE html>
<html>
<body>
  <button id="button">Download books</button>
  <ul id="booksList"></ul>
  <script>
    document.getElementById('button').onclick = () => {
      const ajaxRequest = new XMLHttpRequest();
      ajaxRequest.open('GET', '/books', true);
      ajaxRequest.onload = () => {
        if (ajaxRequest.status === 200) {
          const authors = JSON.parse(ajaxRequest.responseText);
          const ul = document.getElementById('booksList');
          ul.innerHTML = '';
          authors.forEach(name => {
            const list = document.createElement('li');
            list.textContent = name;
            ul.appendChild(list);
          });
        }
      };
      ajaxRequest.send();
    };
  </script>
</body>
</html>
`;

httpTask2
  .createServer((req, res) => {
    if (req.url === '/books') {
      fs.readFile(path.join(__dirname, 'books.json'), (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Json error reading!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
        return;
      });

      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTask2);
  })
  .listen(3000, () => {
    console.log('Books server is running... http://localhost:3000');
  });
