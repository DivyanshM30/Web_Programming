import React, { Component } from "react"; 
 
class TemperatureConverter extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      temperature: "", 
      scale: "C", // Default scale is Celsius 
    }; 
  } 
 
  handleChange = (event) => { 
    this.setState({ temperature: event.target.value }); 
  }; 
 
  handleScaleChange = (event) => { 
    this.setState({ scale: event.target.value }); 
  }; 
 
  convertTemperature = () => { 
    const { temperature, scale } = this.state; 
    const temp = parseFloat(temperature); 
 
    if (isNaN(temp)) return ""; 
 
    return scale === "C" 
      ? ((temp * 9) / 5 + 32).toFixed(2) + " °F" 
      : (((temp - 32) * 5) / 9).toFixed(2) + " °C"; 
  }; 
 
  render() { 
    return ( 
      <div style={{ textAlign: "center", marginTop: "20px" }}> 
        <h2>Temperature Converter</h2> 
        <input 
          type="number" 
          placeholder="Enter temperature" 
          value={this.state.temperature} 
          onChange={this.handleChange} 
        /> 
        <select value={this.state.scale} onChange={this.handleScaleChange}> 
          <option value="C">Celsius to Fahrenheit</option> 
          <option value="F">Fahrenheit to Celsius</option> 
        </select> 
        <h3>Converted Temperature: {this.convertTemperature()}</h3> 
      </div> 
    ); 
  } 
} 
 
export default TemperatureConverter;