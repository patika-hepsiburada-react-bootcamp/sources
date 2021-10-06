import './App.css';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
// import UserDetail from './pages/UserDetail';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            {/* <Route path="/users/:id" component={UserDetail} /> */}
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
