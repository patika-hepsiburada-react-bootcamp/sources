import React from 'react';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <img src={img1} alt="" className="img" />
      <img src={img2} alt="" className="img" />
    </div>
  );
}

export default Users;
