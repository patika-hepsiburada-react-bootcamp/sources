// 1.
// const users = ['Mehmet', 'Mehmet', 'Ayşe', 'Fatma'];
// const users2 = ['Burak', ...users];

// console.log('users', users);
// console.log('users2', users2);

// 2.
// const user = {
//   name: 'Ahmet',
//   surname: 'Vural',
// };

// const new_user = {
//   ...user,
//   age: 30,
// };

// console.log('user', user);
// console.log('new_user', new_user);

// 3.
const users = [
  {
    name: 'Mehmet',
  },
  {
    name: 'Ahmet',
  },
  {
    name: 'Büşra',
  },
  {
    name: 'Fatma',
  },
];

const new_users = [...users, { name: 'Emine' }, 4, 'Test'];

console.log('users', users);
console.log('new_users', new_users);
