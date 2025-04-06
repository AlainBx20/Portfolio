import React, { useState } from 'react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FF0000, #FF4444)',
          border: '3px solid white',
          boxShadow: '0 0 20px rgba(255,0,0,0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '90px',
            right: '0',
            width: '350px',
            height: '450px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            border: '3px solid #FF0000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '15px',
              background: 'linear-gradient(45deg, #FF0000, #FF4444)',
              color: 'white',
              borderTopLeftRadius: '7px',
              borderTopRightRadius: '7px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Chat with me!</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '24px',
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              background: '#f5f5f5',
            }}
          >
            <p style={{ margin: '0 0 10px 0' }}>Hello! How can I help you today?</p>
          </div>

          <div
            style={{
              padding: '15px',
              background: 'white',
              borderTop: '1px solid #ddd',
              display: 'flex',
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                marginRight: '10px',
                fontSize: '14px',
              }}
            />
            <button
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
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

export default FloatingChat; 