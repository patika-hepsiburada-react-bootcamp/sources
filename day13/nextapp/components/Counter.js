import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
    </div>
  );
}

export default Counter;
