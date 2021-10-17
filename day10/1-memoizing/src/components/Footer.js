import React from 'react';

function Footer({ usernames }) {
  console.log('Footer: Re-render');
  return (
    <div>
      <hr />
      <p>Footer</p>
      <div>{usernames}</div>
    </div>
  );
}

export default React.memo(Footer);
