const fs = require('fs');

function countStudents(path, field) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const headerCount = headers.length;
    const students = lines.slice(1);

    const fieldCounts = new Array(headerCount).fill(0);

    students.forEach(student => {
      const studentData = student.split(',');
      if (studentData.length === headerCount) {
        studentData.forEach((field, index) => {
          if (field.trim() !== '') {
            fieldCounts[index]++;
          }
        });
      }
    });

    if (field) {
      const fieldIndex = headers.findIndex(header => header.trim() === field);
      if (fieldIndex !== -1) {
        console.log(`Number of students in ${field.trim()}: ${fieldCounts[fieldIndex]}. List: ${students.map(student => student.split(',')[fieldIndex]).filter(field => field.trim() !== '').join(', ')}`);
      } else {
        console.log(`Field ${field.trim()} not found in the database.`);
      }
    } else {
      console.log(`Number of students: ${students.length}`);
      headers.forEach((header, index) => {
        console.log(`Number of students in ${header.trim()}: ${fieldCounts[index]}. List: ${students.map(student => student.split(',')[index]).filter(field => field.trim() !== '').join(', ')}`);
      });
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
