import './App.css';
import Container from './components/Container';

// contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { CounterProvider } from './contexts/CounterContext';

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Container />
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
