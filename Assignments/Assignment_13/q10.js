import React, { useState } from "react"; 
 
const App = () => { 
  const [randomNumber, setRandomNumber] = useState(null); 
 
  const generateRandomNumber = () => { 
    const num = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(num); 
  }; 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "20px" }}> 
      <h2>Random Number Generator</h2> 
      <button onClick={generateRandomNumber} style={{ padding: "10px", 
fontSize: "16px" }}> 
        Generate Random Number 
      </button> 
      {randomNumber !== null && <p>Generated Number: {randomNumber}</p>} 
    </div> 
  ); 
}; 
 
export default App;