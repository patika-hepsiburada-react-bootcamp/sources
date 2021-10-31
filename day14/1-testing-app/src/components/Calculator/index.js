import { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [result, setResult] = useState(number1 * number2);

  const onSubmit = () => {
    setResult(Number(number1) * Number(number2));
  };

  return (
    <div>
      <input
        data-testid="number1"
        value={number1}
        onChange={({ target }) => setNumber1(target.value)}
      />
      <input
        data-testid="number2"
        value={number2}
        onChange={({ target }) => setNumber2(target.value)}
      />

      <button data-testid="submit-btn" onClick={onSubmit}>
        Submit
      </button>
      <h2 data-testid="result">{result}</h2>
    </div>
  );
}

export default Calculator;
