import React from "react"; 
const ProfileImage = ({ imageUrl }) => { 
return ( 
<div> 
<img 
src={imageUrl} 
alt="User Profile" 
style={{ width: "150px", height: "150px", borderRadius: "50%" }} 
/> 
</div> 
); 
}; 
export default ProfileImage;