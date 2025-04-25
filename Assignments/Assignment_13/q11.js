import React from "react"; 
const isLeapYear = (year) => { 
return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; 
}; 
const App = () => { 
const year = 2024;  
const result = isLeapYear(year) ? "It is a Leap Year!" : " Not a Leap Year."; 
return ( 
<div style={{ textAlign: "center", marginTop: "20px" }}> 
<h2>Leap Year Checker</h2> 
<p>Year: {year}</p> 
<p>{result}</p> 
</div> 
); 
}; 
export default App; 