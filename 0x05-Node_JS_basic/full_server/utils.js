import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    // const data = await fs.readFile(filePath, 'utf8');
    const students = {};
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          const lines = data.toString().split('\n');
          const noHeader = lines.slice(1);
          for (let i = 0; i < noHeader.length; i += 1) {
            if (noHeader[i]) {
              const field = noHeader[i].toString().split(',');
              if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                students[field[3]].push(field[0]);
              } else {
                students[field[3]] = [field[0]];
              }
            }
          }
          resolve(students);
        }
      });
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
