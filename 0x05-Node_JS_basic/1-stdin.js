const readline = require('readline');

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user.question('Welcome to Holberton School, what is your name? ', (name) => {
  console.log(`Your name is: ${name}`);
  user.close();
});

user.on('close', () => {
  console.log('This important software is now closing');
});
