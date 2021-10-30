import React, { useState } from 'react';
import './App.css';
import Loadable from 'react-loadable';

// import Users from './components/Users';
// const Users = React.lazy(() => import('./components/Users'));

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const LoadableUsers = Loadable({
  loader: () => import('./components/Users'),
  loading: Loading,
  timeout: 10,
});

function App() {
  const [toggle, setToggle] = useState(false);

  const onMouseOver = () => {
    LoadableUsers.preload();
  };

  return (
    <div className="App">
      <button onMouseOver={onMouseOver} onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <LoadableUsers />}
    </div>
  );
}

export default App;
