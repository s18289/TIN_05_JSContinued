'use strict';

const student = {
  id: '',
  firstName: '',
  lastName: '',
  subjects: ['Math', 'English', 'Programming'],
};

function createStudent(id, firstName, lastName) {
  const newStudent = Object.create(student);

  newStudent.id = id;
  newStudent.firstName = firstName;
  newStudent.lastName = lastName;
  newStudent.subjects = student.subjects;

  return newStudent;
}

console.log(createStudent('s18289', 'Denys', 'Ratushniak'));
