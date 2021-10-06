import { createContext, useState, useContext } from 'react';

import { nanoid } from 'nanoid';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: '1', name: 'Ahmet' },
    { id: '2', name: 'Murat' },
  ]);

  const addUser = (data) => setUsers((u) => [...u, { ...data, id: nanoid() }]);

  const removeUser = (id) => {
    const data = users;
    const index = data.findIndex((user) => user.id === id);
    data.splice(index, 1);

    setUsers([...data]);
  };

  const removeAll = () => setUsers([]);

  const values = {
    users,
    addUser,
    removeUser,
    removeAll,
  };

  return <UsersContext.Provider value={values}>{children}</UsersContext.Provider>;
};

export const useUsers = () => useContext(UsersContext);
