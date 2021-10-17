import { useState, useCallback } from 'react';
import Header from './components/Header';

function App2() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Ahmet', 'Mehmet']);
  const [name, setName] = useState('');

  const increase = useCallback(() => {
    setCount((c) => c + users.length);
  }, [users]);

  return (
    <div>
      <Header increase={increase} />

      <hr />

      <h1>{count}</h1>
      <button onClick={increase}>Arttır</button>

      <hr />

      {users.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setUsers((u) => [...u, name]);
          setName('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App2;
