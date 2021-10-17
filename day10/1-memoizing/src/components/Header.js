import React from 'react';

function Header({ increase }) {
  console.log('Header: Re-render');

  return (
    <div>
      <button onClick={increase}>Increase from Header</button>
    </div>
  );
}

export default React.memo(Header);
