import { Subjects } from "./subjects/Subjects";

console.log("C++");
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

console.log("Java");
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log("React");
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());