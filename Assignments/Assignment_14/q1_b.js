import React from "react"; 
import srcImage from "./Images/srcImage.jpg"; // Importing from src folder 
 
const App = () => { 
  return ( 
    <div style={{ textAlign: "center", marginTop: "20px" }}> 
      <h2>Image from src Folder</h2> 
      <img src={srcImage} alt="From src Folder" width="300" /> 
    </div> 
  ); 
}; 
 
export default App; 