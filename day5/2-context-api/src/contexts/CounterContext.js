import { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const values = {
    count,
    setCount,
  };

  return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>;
};

export const useCounter = () => useContext(CounterContext);
