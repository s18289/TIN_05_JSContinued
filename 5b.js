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
  };

  student.id = id;
  student.firstName = firstName;
  student.lastName = lastName;
  student.grades = grades;

  return student;
}

const den = new student('s18289', 'Denys', 'Ratushniak', [5, 3, 3.5, 4, 5]);

den.studentPerformance();
