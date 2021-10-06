import './App.css';
import Container from './components/Container';

import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
