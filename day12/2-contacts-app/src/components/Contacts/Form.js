import { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { addItems } from 'redux/slices/contacts';
import { useDispatch } from 'react-redux';

function Form() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const names = name.split(',');
    const data = names.map((name) => ({ id: nanoid(), name }));

    dispatch(addItems(data));
  };

  return (
    <div className="form">
      <h3>Form</h3>
      <input value={name} onChange={({ target }) => setName(target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
