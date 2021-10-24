import React from 'react';

import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from 'redux/slices/contacts';

import EasyEdit, { Types } from 'react-easy-edit';

function Item({ item }) {
  const dispatch = useDispatch();

  const save = (id, val) => {
    dispatch(
      updateItem({
        id,
        changes: {
          id,
          name: val,
        },
      }),
    );
  };

  const cancel = () => {
    alert('Cancelled');
  };

  const handleRemove = () => {
    if (!window.confirm('Emin misin?')) {
      return false;
    }

    dispatch(removeItem(item.id));
  };

  return (
    <div className="list-item">
      <button onClick={handleRemove}>Sil</button>

      <EasyEdit
        type={Types.TEXT}
        onSave={(val) => save(item.id, val)}
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
