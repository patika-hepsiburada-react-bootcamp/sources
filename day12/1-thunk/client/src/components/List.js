import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserAsync } from '../redux/slices/UserSlice';

function List() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default List;
