'use strict';

const cat = {
  id: 1,
  name: 'Mikky',
  age: 2,

  sayHi: function () {
    return `Hi, I am ${this.name}`;
  },

  meow: function () {
    console.log('Meow!');
  },
};

function objectDetails(object) {
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${typeof value}`);
  }
}

objectDetails(cat);
