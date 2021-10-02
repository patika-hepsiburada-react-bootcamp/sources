import { useUsers } from '../../contexts/UsersContext';

import ListItem from './ListItem';

function List() {
  const { users, removeAll } = useUsers();

  return (
    <div>
      <ul>
        {users.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>

      {users.length > 1 && <button onClick={() => removeAll()}>Remove All</button>}
    </div>
  );
}

export default List;
