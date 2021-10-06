import { useUsers } from '../../contexts/UsersContext';

function ListItem({ item }) {
  const { removeUser } = useUsers();

  const handleRemove = (id) => {
    removeUser(id);
  };

  return (
    <li>
      {item.name} <button onClick={() => handleRemove(item.id)}>x</button>
    </li>
  );
}

export default ListItem;
