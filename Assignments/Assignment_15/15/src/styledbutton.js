import React from 'react';

function StyledButton() {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0'
  };

  return (
    <div>
      <h3>Styled Button (Inline CSS)</h3>
      <button style={buttonStyle}>Inline Styled Button</button>
    </div>
  );
}

export default StyledButton;