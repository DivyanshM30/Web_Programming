import React from "react"; 
 
const App = () => { 
  const inputString = "react";  
  const reversedString = inputString.split("").reverse().join(""); 
  const isPalindrome = inputString.toLowerCase() === 
reversedString.toLowerCase(); 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "20px" }}> 
      <h2>String Reversal & Palindrome Check</h2> 
      <p>Original String: {inputString}</p> 
      <p>Reversed String: {reversedString}</p> 
      <p>{isPalindrome ? " It's a Palindrome!" : " Not a Palindrome."}</p> 
    </div> 
  ); 
}; 
 
export default App; 
