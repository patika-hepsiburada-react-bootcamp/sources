import './App.css';
import { useState } from 'react';
// import Header from './components/Header';
import Counter from './components/Counter';
// import Form from './components/Form';
// import Users from './components/Users';
// import Paragraph from './components/Paragraph';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      App
      <Counter toggle={toggle} setToggle={setToggle} />
      {/* <Paragraph
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        numberOfLines={4}
      /> */}
      {/* <Users title="Users" toggle={toggle} setToggle={setToggle} />
      

      {/* <Form /> */}
      {/* <Header toggle={toggle} /> */}
      {/* <br />
      <br />
      <br />
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
      <div>{String(toggle)}</div> */}
    </div>
  );
}

export default App;
