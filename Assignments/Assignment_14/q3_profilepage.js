import React from "react"; 
import ProfileImage from "./profileimage"; 
import UserInfo from "./userinfo"; 
import UserPosts from "./userposts"; 
const ProfilePage = () => { 
const user = { 
name: "Divyansh Mishra", 
email: "divyansh.mishra2023@vitstudent.ac.in", 
bio: "Full Stack Developer | JavaScript Enthusiast", 
posts: ["Hello World!", "Learning React is fun!", "Building my first React app!"] 
}; 
return ( 
<div style={{ width: "400px", margin: "auto", textAlign: "center", border: 
"1px solid #ddd", padding: "20px", borderRadius: "10px" }}> 
<ProfileImage imageUrl={user.imageUrl} /> 
<UserInfo name={user.name} email={user.email} bio={user.bio} /> 
      <UserPosts posts={user.posts} /> 
    </div> 
  ); 
}; 
 
export default ProfilePage; 