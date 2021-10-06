import { useState, useEffect, useMemo } from 'react';
import Header from './Header';

const cities = ['Istanbul', 'Ankara', 'Yalova'];

function Counter({ toggle, setToggle }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // console.log('Count veya name state değişti');
  }, [count, name]);

  useEffect(() => {
    console.log('Counter Component: Mount Edildi');

    // const interval = setInterval(() => {
    //   setCount((c) => c + 1);
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  // const user = useMemo(() => {
  //   return { name: 'Mehmet', count };
  // }, [count]);

  return (
    <div>
      <Header cities={cities} />

      <h1>{count}</h1>
      <button onClick={decrease}>Azalt</button>
      <button onClick={increase}>Arttir</button>
      {/* <hr />
      <input placeholder="name" name={name} onChange={(e) => setName(e.target.value)} />
      <hr />
      Toggle: {String(toggle)}
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
      <hr /> */}
    </div>
  );
}

export default Counter;
