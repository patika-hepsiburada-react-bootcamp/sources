import React from 'react';
import Form from './Form';
import List from './List';

function Contacts() {
  return (
    <div className="container">
      <h1>Contacts</h1>

      <div className="content">
        <List />
        <Form />
      </div>
    </div>
  );
}

export default Contacts;
