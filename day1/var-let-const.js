// 1.
// let name = 'Mehmet';
// name = 'Seven';

// console.log(name);

// 2.
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("i'nin son değeri: ", i);

// 3.
// const pi = 3;
// pi = 3.14;
// console.log(pi);

// 4.
// const users = ['Serhat', 'Ömer', 'Emine', 'Burak'];
// users.push('Mehmet');
// users = ['Mehmet'];

// console.log(users);

// 5.
// const user = {
//   name: 'Ahmet',
//   surname: 'Vural',
// };

// user = {
//   name: 'Mehmet',
//   surname: 'Seven',
// };

// console.log(user);

// let x = 10;
// let y = x;

// x = 15;

// console.log(x);
// console.log(y);

const user1 = {
  name: 'Ahmet',
};

const user2 = { ...user1, name: 'Mehmet' };
// const user2 = Object.assign({}, user1, { name: 'Can' });

console.log('user1', user1);
console.log('user2', user2);
