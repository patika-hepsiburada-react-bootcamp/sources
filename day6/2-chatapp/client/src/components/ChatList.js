import { useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';
import ChatItem from './ChatItem';

import ScrollableFeed from 'react-scrollable-feed';

function ChatList() {
  const chatListRef = useRef(null);

  const { chat } = useChat();

  useEffect(() => {
    chatListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div className="chat-container" ref={chatListRef}>
      <ScrollableFeed forceScroll={true}>
        {chat.map((item, i) => (
          <ChatItem key={i} item={item} />
        ))}
      </ScrollableFeed>

      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

export default ChatList;
