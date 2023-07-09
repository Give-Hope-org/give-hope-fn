import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="bg-blue-500 text-white rounded-lg py-2 px-4">
        {message.text}
      </div>
      <div className="ml-2 text-gray-500 text-sm">{message.timestamp}</div>
    </div>
  );
};

export default ChatMessage;
