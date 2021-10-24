import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { postUserAsync } from '../redux/slices/UserSlice';

function Form() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.new_user_loading);

  const [name, setName] = useState('');

  const handleSubmit = () => {
    dispatch(postUserAsync({ name }));
    setName('');
  };

  return (
    <div style={{ marginTop: 15 }}>
      <input value={name} onChange={({ target }) => setName(target.value)} disabled={loading} />
      <button onClick={handleSubmit} disabled={loading}>
        Add
      </button>
    </div>
  );
}

export default Form;
