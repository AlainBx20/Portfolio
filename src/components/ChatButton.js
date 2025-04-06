import React from 'react';

const ChatButton = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 999999,
      }}
    >
      <span style={{ color: 'white', fontSize: '24px' }}>💬</span>
    </div>
  );
};

export default ChatButton; 