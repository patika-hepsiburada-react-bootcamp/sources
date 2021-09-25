import PropTypes from 'prop-types';

function Users({ title, list }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {list.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

Users.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

Users.defaultProps = {
  title: 'Kullanıcılar',
};

export default Users;
