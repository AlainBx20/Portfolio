import React, { useEffect } from 'react';

const StaticChat = () => {
  useEffect(() => {
    // Create the chat button element
    const chatButton = document.createElement('div');
    chatButton.id = 'static-chat-button';
    chatButton.innerHTML = `
      <style>
        #static-chat-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 70px;
          height: 70px;
          background-color: #FF0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999999;
          box-shadow: 0 0 20px rgba(255,0,0,0.5);
          border: 3px solid white;
        }
        #static-chat-button span {
          color: white;
          font-size: 30px;
        }
      </style>
      <span>💬</span>
    `;

    // Add click handler
    chatButton.onclick = () => {
      alert('Chat button clicked!');
    };

    // Append to body
    document.body.appendChild(chatButton);

    // Cleanup
    return () => {
      const button = document.getElementById('static-chat-button');
      if (button) {
        document.body.removeChild(button);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StaticChat; 