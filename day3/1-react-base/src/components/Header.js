import { memo } from 'react';

function Header({ cities }) {
  console.log('Header re-render');

  return (
    <div>
      <div className="head">HEADER </div>
      <div>{JSON.stringify(cities)}</div>
    </div>
  );
}

export default memo(Header);
