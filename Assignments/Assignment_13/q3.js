import React from "react"; 
 
const App = () => { 
  // Inline CSS styles as an object 
  const messageStyle = { 
    color: "white", 
    backgroundColor: "green", 
    padding: "10px", 
    borderRadius: "5px", 
    textAlign: "center", 
    fontSize: "20px", 
    fontWeight: "bold", 
  }; 
 
  return <div style={messageStyle}>Hello, This is a Styled Message!</div>; 
}; 
 
export default App; 