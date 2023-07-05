// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Godwin",
  lastName: "Woode",
  age: 26,
  location: "Takoradi",
};

const student2: Student = {
  firstName: "Linda",
  lastName: "Arthur",
  age: 23,
  location: "Accra",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);