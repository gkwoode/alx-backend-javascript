const http = require('http');
const countStudents = require('./3-read_file_async'); // Assuming this file is in the same directory

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then(() => {
        res.end('Done!\n');
      })
      .catch((error) => {
        res.end(error.message + '\n');
      });
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245, () => {});

module.exports = app;
