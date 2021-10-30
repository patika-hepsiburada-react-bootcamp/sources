import React from 'react';

function Form() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <h2>Form</h2>
      <input value={name} onChange={({ target }) => setName(target.value)} />
      <div>{name}</div>
      <button onClick={() => {}}>Click</button>
    </div>
  );
}

export default Form;
