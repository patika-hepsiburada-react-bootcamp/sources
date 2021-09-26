import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`)
      .then((res) => res.data)
      .then((users) => setUser(users))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [id]);

  const nextUserId = Number(id) + 1;
  return (
    <div>
      <h1>User Detail</h1>

      {loading && <div>Loading...</div>}

      {!loading && (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <div>
            <Link to={`/users/${nextUserId}`}>Next User ({nextUserId})</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
