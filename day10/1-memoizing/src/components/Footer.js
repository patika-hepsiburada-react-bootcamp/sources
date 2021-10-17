import React from 'react';
import PropTypes from 'prop-types';

function Footer({ usernames }) {
  return (
    <div>
      <hr />
      <p>Footer</p>
      <div>{usernames}</div>
    </div>
  );
}

Footer.propTypes = {
  usernames: PropTypes.string,
};

export default React.memo(Footer);
