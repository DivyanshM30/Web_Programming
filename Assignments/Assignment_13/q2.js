import React from "react"; 
 
const App = () => { 
  const fruits = ["Apple", "Banana", "Orange"]; 
 
  return ( 
    <div> 
      <h2>Fruit List</h2> 
      <ul> 
        {fruits.map((fruit, index) => ( 
          <li key={index}>{fruit}</li>  
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default App; 