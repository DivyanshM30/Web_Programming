import React from 'react';

function styledbuttonwithinternaljs() {
  return (
    <div>
      <style>
        {`
          .styled-button {
            background-color: #9b59b6;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 10px 0;
            transition: background-color 0.3s ease;
          }
          
          .styled-button:hover {
            background-color: #8e44ad;
          }
          
          .button-container {
            margin-top: 20px;
          }
          
          .button-container h3 {
            color: #2c3e50;
          }
        `}
      </style>
      
      <div className="button-container">
        <h3>Styled Button (Internal CSS)</h3>
        <button className="styled-button">Internal Styled Button</button>
      </div>
    </div>
  );
}

export default styledbuttonwithinternaljs;