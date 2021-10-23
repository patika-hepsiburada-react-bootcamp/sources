import React from 'react';

import Item from './Item';
import { useSelector } from 'react-redux';
import { contactSelectors } from 'redux/slices/contacts';

function List() {
  const items = useSelector(contactSelectors.selectAll);

  return (
    <div className="contacts-list">
      <h3>List</h3>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
