const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
        }

        const headers = lines[0].split(',');
        const students = lines.slice(1);

        const fieldCounts = {};

        students.forEach(student => {
          const studentData = student.split(',');
          if (studentData.length === headers.length) {
            studentData.forEach((field, index) => {
              const header = headers[index].trim();
              if (!fieldCounts[header]) {
                fieldCounts[header] = [];
              }
              if (field.trim() !== '') {
                fieldCounts[header].push(field.trim());
              }
            });
          }
        });

        console.log(`Number of students: ${students.length}`);
        Object.keys(fieldCounts).forEach(header => {
          console.log(`Number of students in ${header}: ${fieldCounts[header].length}. List: ${fieldCounts[header].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
