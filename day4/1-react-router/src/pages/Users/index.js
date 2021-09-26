import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users`)
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {loading && <div>Loading...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
