import logo from '../logo.svg';

// JSX
function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>

      <label htmlFor="name">Name</label>
      <input id="name" />

      <div style={{ marginTop: '50px' }}>Test</div>
    </header>
  );
}

export default Header;
