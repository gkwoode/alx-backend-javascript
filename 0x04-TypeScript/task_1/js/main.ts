// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create a Teacher instance
const teacher: Teacher = {
  firstName: "Kingsley",
  lastName: "Sam",
  fullTimeEmployee: true,
  location: "Ghana",
};

// Add additional attributes dynamically
teacher.contract = true;

// Print the Teacher object
console.log(teacher);

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Directors instance
const director: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 5,
};

// Add additional attributes dynamically
director.contract = true;

// Print the Directors object
console.log(director);

// Define the interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${formattedLastName}`;
};

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClassImpl implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Export the StudentClass
export const StudentClass: StudentClassConstructor = StudentClassImpl;
