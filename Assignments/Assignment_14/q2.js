import React, { useState } from "react"; 
 
const App = () => { 
  const [formData, setFormData] = useState({ 
    username: "", 
    password: "", 
    city: "", 
    server: "", 
    role: "", 
    signOn: [], 
  }); 
 
  const handleChange = (e) => { 
    const { name, value, type, checked } = e.target; 
 
    if (type === "checkbox") { 
      setFormData((prevData) => ({ 
        ...prevData, 
        signOn: checked 
          ? [...prevData.signOn, value] 
          : prevData.signOn.filter((item) => item !== value), 
      })); 
    } else { 
      setFormData((prevData) => ({ ...prevData, [name]: value })); 
    } 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(JSON.stringify(formData, null, 2)); 
  }; 
 
  const handleReset = () => { 
    setFormData({ 
      username: "", 
      password: "", 
      city: "", 
      server: "", 
      role: "", 
      signOn: [], 
    }); 
  }; 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial" 
}}> 
      <h2>Novell Services Login</h2> 
      <form onSubmit={handleSubmit} style={{ display: "inline-block", 
textAlign: "left" }}> 
        <label> 
          Username: <input type="text" name="username" 
value={formData.username} onChange={handleChange} /> 
        </label> 
        <br /> 
        <label> 
          Password: <input type="password" name="password" 
value={formData.password} onChange={handleChange} /> 
        </label> 
        <br /> 
        <label> 
          City of Employment: <input type="text" name="city" 
value={formData.city} onChange={handleChange} /> 
        </label> 
        <br /> 
        <label> 
          Web Server: 
          <select name="server" value={formData.server} 
onChange={handleChange}> 
            <option value="">-- Choose a server --</option> 
            <option value="server1">Server 1</option> 
            <option value="server2">Server 2</option> 
            <option value="server3">Server 3</option> 
          </select> 
        </label> 
        <br /> 
        <fieldset> 
          <legend>Please specify your role:</legend> 
          <label> 
            <input type="radio" name="role" value="Admin" 
checked={formData.role === "Admin"} onChange={handleChange} /> 
            Admin 
          </label> 
          <br /> 
          <label> 
            <input type="radio" name="role" value="Engineer" 
checked={formData.role === "Engineer"} onChange={handleChange} /> 
            Engineer 
          </label> 
          <br /> 
          <label> 
            <input type="radio" name="role" value="Manager" 
checked={formData.role === "Manager"} onChange={handleChange} /> 
            Manager 
          </label> 
          <br /> 
          <label> 
            <input type="radio" name="role" value="Guest" 
checked={formData.role === "Guest"} onChange={handleChange} /> 
            Guest 
          </label> 
        </fieldset> 
        <fieldset> 
          <legend>Single Sign-on to the following:</legend> 
          <label> 
            <input type="checkbox" name="signOn" value="Mail" 
checked={formData.signOn.includes("Mail")} onChange={handleChange} /> 
            Mail 
          </label> 
          <br /> 
          <label> 
            <input type="checkbox" name="signOn" value="Payroll" 
checked={formData.signOn.includes("Payroll")} onChange={handleChange} /> 
            Payroll 
          </label> 
          <br /> 
          <label> 
            <input type="checkbox" name="signOn" value="Self-service" 
checked={formData.signOn.includes("Self-service")} onChange={handleChange} /> 
            Self-service 
          </label> 
        </fieldset> 
        <br /> 
        <button type="submit">Login</button> 
        <button type="button" onClick={handleReset} style={{ marginLeft: 
"10px" }}> 
          Reset 
        </button> 
      </form> 
    </div> 
  ); 
}; 
 
export default App;