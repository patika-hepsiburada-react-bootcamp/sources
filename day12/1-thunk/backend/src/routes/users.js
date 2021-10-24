const express = require('express');
const { nanoid } = require('nanoid');

const router = express.Router();

const users = [
  {
    id: '1',
    name: 'User 1',
  },
  {
    id: '2',
    name: 'User 2',
  },
  {
    id: '3',
    name: 'User 3',
  },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const user = users.find((item) => item.id === id);

  if (!user) {
    return next({ message: 'user not found' });
  }

  res.json(user);
});

router.post('/', (req, res) => {
  const data = req.body;
  const user_data = { id: nanoid(), ...data };

  users.push(user_data);
  res.json(user_data);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id === id);

  if (index < 0) {
    return next({ message: 'User not found!' });
  }

  const data = req.body;
  const user = users[index];
  const updated_data = { ...user, ...data };
  users[index] = updated_data;

  res.json(users[index]);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id === id);

  if (index < 0) {
    return next({ message: 'User not found!' });
  }

  const deleted_user = users[index];
  users.splice(index, 1);

  res.json(deleted_user);
});

module.exports = router;
