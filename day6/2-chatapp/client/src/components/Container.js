import { useEffect } from 'react';

import { useChat } from '../contexts/ChatContext';
import ChatList from './ChatList';
import { connectSocket, subscribeToNewMessages } from '../socketApi';
import Form from './Form';

function Container() {
  const { setChat } = useChat();

  useEffect(() => {
    connectSocket();

    subscribeToNewMessages((message) => {
      console.log(message);
      setChat((prev) => [...prev, { message }]);
    });
  }, [setChat]);

  return (
    <div className="container">
      <ChatList />
      <Form />
    </div>
  );
}

export default Container;
