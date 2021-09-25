import './App.css';
// import { useState } from 'react';
// import Counter from './components/Counter';
// import Form from './components/Form';
import Users from './components/Users';
// import Paragraph from './components/Paragraph';

function App() {
  // const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      {/* <Paragraph
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        numberOfLines={4}
      /> */}

      <Users title="Users" />

      {/* {toggle ? <Counter /> : null} */}

      <br />
      <br />
      <br />
      {/* <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button> */}

      {/* <Form /> */}
    </div>
  );
}

export default App;
