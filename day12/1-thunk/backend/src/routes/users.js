const express = require('express');
const { nanoid } = require('nanoid');

/*
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, voluptates. Corporis saepe recusandae laudantium asperiores libero, aut vitae! Ad fuga quas molestiae molestias optio perferendis, quasi unde facilis sit accusantium.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit at est. Ratione, vel, placeat magnam sequi iure a nisi eius quo molestiae accusantium sapiente ipsam aliquid ad temporibus sunt.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam modi beatae qui nisi sit impedit repudiandae quas quos maxime id consequatur sequi repellat cum tenetur, autem tempore adipisci, earum facilis?
*/

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

  res.json(users);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id === id);

  if (index < 0) {
    return next({ message: 'User not found!' });
  }

  users.splice(index, 1);

  res.json(users);
});

module.exports = router;
