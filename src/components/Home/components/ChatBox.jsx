import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { FiMessageSquare, FiX } from 'react-icons/fi';

const ChatBox = ({ messages }) => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div
      className={`fixed right-4 bottom-4 ${
        isChatOpen ? 'w-96' : 'w-12'
      } `}
    >
      {isChatOpen ? (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="overflow-y-auto max-h-60">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 ml-2"
            >
              Send
            </button>
            <button
              className="text-gray-500 hover:text-gray-600 rounded-full p-2 absolute top-0 right-0"
              onClick={toggleChat}
            >
              <FiX size={24} />
            </button>
          </div>
          </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 absolute bottom-0 right-0 mb-4 mr-4"
          onClick={toggleChat}
        >
          <FiMessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
