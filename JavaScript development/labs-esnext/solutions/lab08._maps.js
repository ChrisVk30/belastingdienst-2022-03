'use strict';

const array = [
  {
    email: 'user1@gmail.com',
    name: 'User1',
    address: 'Street 1'
  },
  {
    email: 'user2@hotmail.com',
    name: 'User2',
    address: 'Street 2'
  },
  {
    email: 'user3@yahoo.com',
    name: 'User3',
    address: 'Street 3'
  },
  {
    email: 'user4@outlook.com',
    name: 'User4',
    address: 'Street 4'
  }
];

// Exercise 1

// const users = (array => {
//   const map = new Map();
//   array.forEach(element => map.set(element.email, element));
//   return map;
// })(array);

// for (const [key, user] of users.entries()) {
//   console.log(`key: ${key} - value: ${user}`);
// }

// Exercise 2

const createUser = ({ email, name, address } = {}) => {
  return {
    email,
    name,
    address,
    [Symbol.toPrimitive](hint) {
      if (hint === 'string') {
        return `${this.email}: ${this.name} ${this.address}`;
      }
    }
  }
}

const users = (array => {
  const map = new Map();
  array.forEach(element => map.set(element.email, createUser(element)));
  return map;
})(array);

console.log(users.get('user2@hotmail.com'));
console.log(`${users.get('user2@hotmail.com')}`);
console.log(String(users.get('user2@hotmail.com')));