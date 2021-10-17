import './App.css';

import { useState } from 'react';
import User from './components/User';
import Github from './components/Github';

interface CityType {
  name: string;
  country: string;
}

function App() {
  const [name, setName] = useState<string | number>('Mehmet');

  const [city, setCity] = useState<CityType>({
    name: 'Istanbul',
    country: 'Turkey',
  });

  const handleClick = () => {
    setName(4);
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Click</button>

      <hr />

      {city.name}

      <User name={'mehmet'} onClick={() => alert('selam')} />

      <hr />
      <Github />
    </div>
  );
}

export default App;
