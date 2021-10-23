import React from 'react';

import Item from './Item';
import { useSelector } from 'react-redux';
import { itemsSelector } from 'redux/slices/contacts';

function List() {
  const items = useSelector(itemsSelector);

  return (
    <div className="contacts-list">
      <h3>Another List</h3>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
