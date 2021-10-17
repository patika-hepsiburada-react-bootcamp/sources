import { useState, useMemo } from 'react';
import Footer from './components/Footer';

function App() {
  const [users, setUsers] = useState(['Ahmet', 'Mehmet']);
  const [name, setName] = useState('');

  const usernames = useMemo(() => {
    return users.map((item) => item).join(', ');
  }, [users]);

  return (
    <div className="App">
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

      <Footer usernames={usernames} />
    </div>
  );
}

export default App;
