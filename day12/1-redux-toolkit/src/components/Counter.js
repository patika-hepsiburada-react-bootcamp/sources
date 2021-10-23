import React from 'react';

import { increase, decrease, incrementByAmount } from 'redux/slices/counter';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(incrementByAmount({ amount: 3 }))}>Increase by Amount</button>
    </div>
  );
}

export default Counter;
