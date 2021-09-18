import fetch from 'node-fetch';
import axios from 'axios';

console.log('Veri çekme işlemi başlıyor...');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

console.log('Post yükleniyor....');
axios
  .get('https://jsonplaceholder.typicode.com/posts/15')
  .then((res) => res.data)
  .then((post) => {
    console.log('Post yüklendi!', post);

    console.log('User yükleniyor...');
    axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => {
      console.log('User yüklendi...', res.data);
    });
  });
