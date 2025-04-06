import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Chat Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#FF0000', // Bright red for visibility
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(255,0,0,0.5)',
          border: '3px solid white',
        }}
      >
        <span style={{ color: 'white', fontSize: '24px' }}>💬</span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '0',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            border: '3px solid #FF0000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '15px',
              backgroundColor: '#FF0000',
              color: 'white',
              borderTopLeftRadius: '7px',
              borderTopRightRadius: '7px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Chat with me!</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
              }}
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              padding: '15px',
              overflowY: 'auto',
            }}
          >
            <p>Hello! How can I help you today?</p>
          </div>

          {/* Input */}
          <div
            style={{
              padding: '15px',
              borderTop: '1px solid #ddd',
              display: 'flex',
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                marginRight: '10px',
              }}
            />
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#FF0000',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 