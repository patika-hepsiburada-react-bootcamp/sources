import { useTheme } from '../contexts/ThemeContext';
import { useCounter } from '../contexts/CounterContext';

function Header() {
  const { theme, setTheme } = useTheme();
  const { count, setCount } = useCounter();

  return (
    <div>
      <h1>Header</h1>
      <div>Active Theme: {theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>

      <hr />

      <h3>Count: {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>

      <hr />
    </div>
  );
}

export default Header;
