import { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import UserDetail from '../UserDetail';

const isLoggedIn = true;

function Users() {
  let { path, url } = useRouteMatch();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      return false;
    }

    axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users`)
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Users</h1>

      {loading && <div>Loading...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${url}/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={UserDetail} />
      </Switch>
    </div>
  );
}

export default Users;
