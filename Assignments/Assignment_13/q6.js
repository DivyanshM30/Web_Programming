import React from "react"; 
 
const App = () => { 
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"]; 
  const today = new Date().getDay(); 
 
  return <h1>Today is {daysOfWeek[today]}.</h1>; 
}; 
 
export default App; 