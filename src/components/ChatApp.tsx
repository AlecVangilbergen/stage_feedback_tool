// src/components/ChatApp.tsx
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
    // Send message to backend or ChatGPT API
  };

  return (
    <div className="bg-gray-100 h-screen p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
