import './App.scss';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="#/">1</a>
        </li>
        <li>
          <a href="#/">2</a>
        </li>
        <li>
          <a href="#/">3</a>
        </li>
      </ul>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
