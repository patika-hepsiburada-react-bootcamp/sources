import React from 'react';
import Form from './Form';
// import AnotherForm from './AnotherForm';
import List from './List';
// import AnotherList from './AnotherList';

function Contacts() {
  return (
    <div className="container">
      <h1>Contacts</h1>

      <div className="content">
        <List />
        {/* <AnotherList /> */}
        <Form />
        {/* <AnotherForm /> */}
      </div>
    </div>
  );
}

export default Contacts;
