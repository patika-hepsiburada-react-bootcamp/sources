import { useState } from 'react';

import { sendMessage } from '../socketApi';
import { useChat } from '../contexts/ChatContext';

function Form() {
  const [message, setMessage] = useState('');
  const { setChat } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      return false;
    }

    setChat((prev) => [...prev, { message, isFromMe: true }]);
    sendMessage('new-message', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        className="message-input"
        placeholder="bir şeyler yazın..."
      />
    </form>
  );
}

export default Form;
