// src/components/ChatMessages.tsx
import React from 'react';

interface ChatMessagesProps {
  messages: string[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="space-y-2">
      {messages.map((message, index) => (
        <div key={index} className="bg-gray-200 p-2 rounded">
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
