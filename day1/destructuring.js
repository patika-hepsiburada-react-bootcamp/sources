const user = {
  name: 'Ahmet',
  school: 'Sakarya Unv.',
  age: 22,
  address: {
    city: 'Istanbul',
    country: 'Turkey',
  },
};

// let name = user.name;
// let school = user.school;
// let age = user.age;

// let {
//   name: isim,
//   school: okul,
//   age: yas,
//   address: { city, country },
// } = user;

// console.log(city, country);

// console.log(isim, okul, yas);

// name = 'Mehmet';

// console.log("name", name);
// console.log("user", user);

function logUser({ name, address: { city } }) {
  console.log(name, city);
}

const params = {
  name: 'Ahmet',
  age: 20,
  address: {
    city: 'Istanbul',
    country: 'Turkey',
  },
};

logUser(params);
