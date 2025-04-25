import React from "react"; 
 
const isPrime = (num) => { 
  if (num < 2) return false; 
  for (let i = 2; i * i <= num; i++) { 
    if (num % i === 0) return false; 
  } 
  return true; 
}; 
 
const App = () => { 
  const number = 17;  
  const result = isPrime(number) ? "a Prime Number" : "not a Prime Number"; 
 
  return <h1>{number} is {result}.</h1>; 
}; 
 
export default App;