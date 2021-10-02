import { useState } from 'react';
import { useUsers } from '../../contexts/UsersContext';

function Form() {
  const [name, setName] = useState('');
  const { addUser } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return false;
    }

    addUser({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        placeholder="enter a name"
      />
    </form>
  );
}

export default Form;
