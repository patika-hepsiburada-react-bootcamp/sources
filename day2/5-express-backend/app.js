const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send("{ name: 'Ahmet' }");
});

app.get('/users', (req, res) => {
  res.json([{ name: 'Ahmet' }, { name: 'Mehmet' }]);
});

app.listen(4000, () => console.log('Server is up on PORT 4000'));
