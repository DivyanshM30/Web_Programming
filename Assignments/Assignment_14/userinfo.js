import React from "react"; 
 
const UserInfo = ({ name, email, bio }) => { 
  return ( 
    <div style={{ textAlign: "center" }}> 
      <h2>{name}</h2> 
      <p><strong>Email:</strong> {email}</p> 
      <p><strong>Bio:</strong> {bio}</p> 
    </div> 
  ); 
}; 
 
export default UserInfo;