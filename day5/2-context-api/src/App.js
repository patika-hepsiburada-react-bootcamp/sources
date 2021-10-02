import './App.css';
import Container from './components/Container';

// contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { CounterProvider } from './contexts/CounterContext';
import { UsersProvider } from './contexts/UsersContext';

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <UsersProvider>
          <Container />
        </UsersProvider>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
