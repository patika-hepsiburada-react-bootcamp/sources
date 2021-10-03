import React from 'react';

function ChatItem({ item }) {
  return <div className={`chat-message ${item.isFromMe ? 'me' : 'you'} `}>{item.message}</div>;
}

export default ChatItem;
