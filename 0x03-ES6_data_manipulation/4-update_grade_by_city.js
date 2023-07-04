export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
    return { ...student, grade: newGrade.length > 0 ? newGrade[0].grade : 'N/A' };
  });
}