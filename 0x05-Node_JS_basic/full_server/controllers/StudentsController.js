// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const students = readDatabase(process.argv[2]);

    res.status(200).send(`
      This is the list of our students
      ${Object.keys(students).map((field) => `
        Number of students in ${field.toUpperCase()}: ${students[field].length}. List: ${students[field].join(', ')}`).join('\n')}
    `);
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const students = readDatabase(process.argv[2]);

    res.status(200).send(`List: ${students[major].join(', ')}`);
  }
}

module.exports = StudentsController;
