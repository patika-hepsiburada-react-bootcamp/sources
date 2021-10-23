import { useState } from 'react';

import { addItem } from 'redux/slices/contacts';
import { useDispatch } from 'react-redux';

function AnotherForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="form">
      <h3>Another Form</h3>
      <input value={name} onChange={({ target }) => setName(target.value)} />
      <button onClick={() => dispatch(addItem({ name }))}>Submit</button>
    </div>
  );
}

export default AnotherForm;
