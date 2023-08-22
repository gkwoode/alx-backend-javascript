const express = require('express');
const fs = require('fs');
const csv = require('csv');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route handler for the '/students' endpoint
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  const students = await countStudents(databasePath);

  res.send('This is the list of our students:');
  for (const student of students) {
    res.write(` ${student}`);
  }
});

app.listen(port, () => {
});

module.exports = app;
