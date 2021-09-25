import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Users({ title }) {
  const [users, setUsers] = useState([{ name: 'Initial Name' }]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => setUsers(res.data))
  //     .catch(console.log)
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers((u) => [...u, ...data]);
      setLoading(false);
    })();
  }, []);

  const addNewUser = () => {
    setUsers([...users, { name }]);
    setName('');
  };

  return (
    <div>
      <h1>{title}</h1>

      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addNewUser}>Add</button>
    </div>
  );
}

Users.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

Users.defaultProps = {
  title: 'Kullanıcılar',
};

export default Users;
