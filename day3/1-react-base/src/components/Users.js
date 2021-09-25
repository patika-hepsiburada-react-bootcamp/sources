import PropTypes from 'prop-types';
import { useState } from 'react';

function Users({ title }) {
  const [users, setUsers] = useState([{ name: 'Ayşe' }, { name: 'Fatma' }]);
  const [name, setName] = useState('');

  const addNewUser = () => {
    setUsers([...users, { name }]);
    setName('');
  };

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {i + 1}. {user.name}
          </li>
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
