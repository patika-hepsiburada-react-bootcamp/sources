import React from 'react';

import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/slices/contacts';

import EasyEdit, { Types } from 'react-easy-edit';

function Item({ item }) {
  const dispatch = useDispatch();

  const save = (value) => {
    alert(value);
  };

  const cancel = () => {
    alert('Cancelled');
  };

  return (
    <div className="list-item">
      <button onClick={() => dispatch(removeItem(item.id))}>Sil</button>

      <EasyEdit
        type={Types.TEXT}
        onSave={save}
        onCancel={cancel}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        // attributes={{ name: 'awesome-input', id: 1 }}
        placeholder={item.name}
      />
    </div>
  );
}

export default Item;
