import fetch from 'node-fetch';
import axios from 'axios';

console.log('Veri çekme işlemi başlıyor...');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message))
//   .finally(() => {
//     console.log('Finally chain');
//   });

// console.log('Post yükleniyor....');
// axios('https://jsonplaceholder.typicode.com/posts/15');
//   .then((res) => res.data)
//   .then((post) => {
//     console.log('Post yüklendi!', post);

//     console.log('User yükleniyor...');
//     axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => {
//       console.log('User yüklendi...', res.data);
//     });
//   });

// async/await
// async function getData() {
//   const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/15');
//   const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
//   const { data: todos } = await axios(
//     `https://jsonplaceholder.typicode.com/todos?userId=${post.userId}`,
//   );

//   console.log('post', post);
//   console.log('user', user);
//   console.log('todos', todos);
// }

// getData();

(async () => {
  try {
    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/15');
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const { data: todos } = await axios(
      `https://jsonplaceholder.typicode.com/todos?userId=${post.userId}`,
    );

    console.log('post', post);
    console.log('user', user);
    console.log('todos', todos);
  } catch (err) {
    console.error(err.message);
  }
})();
