import React from 'react';

import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, removeAllItems } from 'redux/slices/contacts';

function List() {
  const dispatch = useDispatch();

  const items = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <div className="contacts-list">
      <h3>Contacts ({total})</h3>
      <button style={{ marginBottom: 15 }} onClick={() => dispatch(removeAllItems())}>
        Remove All
      </button>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
