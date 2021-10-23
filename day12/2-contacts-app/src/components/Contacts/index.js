import React from 'react';
import Form from './Form';
import AnotherForm from './AnotherForm';
import List from './List';

function Contacts() {
  return (
    <div className="container">
      <h1>Contacts</h1>

      <div className="content">
        <List />
        <Form />
        <AnotherForm />
      </div>
    </div>
  );
}

export default Contacts;
