import React from 'react';

import Item from './Item';
import { useSelector } from 'react-redux';

function List() {
  const items = useSelector((state) => state.contacts.items);

  console.log(items);

  return (
    <div className="contacts-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
