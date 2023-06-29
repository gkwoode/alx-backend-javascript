export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'students');
  }

  // Private validation methods
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string.`);
    }
    return value;
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }

  _validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new Error(`${attributeName} must be an array.`);
    }
    return value;
  }
}