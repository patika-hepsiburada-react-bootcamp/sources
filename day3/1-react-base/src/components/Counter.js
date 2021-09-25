import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Count veya name state değişti');
  }, [count, name]);

  useEffect(() => {
    console.log('Counter Component: Mount Edildi');

    return () => console.log('Unmounted');
  }, []);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Azalt</button>
      <button onClick={increase}>Arttir</button>

      <hr />
      <input placeholder="name" name={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Counter;
