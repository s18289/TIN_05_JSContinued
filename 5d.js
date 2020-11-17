'use strict';

function student(id, firstName, lastName, grades) {
  const student = {
    studentPerformance() {
      console.log(
        `${this.firstName} ${this.lastName} ${
          this.grades.reduce((p, c) => p + c, 0) / this.grades.length
        }`
      );
    },

    set fullName(fullName) {
      this.firstName = fullName.trim().split(' ')[0];
      this.lastName = fullName.trim().split(' ')[1];
    },

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    get avgGrade() {
      return this.grades.reduce((p, c) => p + c, 0) / this.grades.length;
    },
  };

  student.id = id;
  student.firstName = firstName;
  student.lastName = lastName;
  student.grades = grades;

  return student;
}

const den = new student('s18289', 'Denys', 'Ratushniak', [5, 3, 3.5, 4, 5]);

console.log(den.avgGrade);

console.log(den.fullName); // full name before changing
console.log((den.fullName = 'Jhon Smith')); // changing full name
console.log(den.fullName); // full name after changing
