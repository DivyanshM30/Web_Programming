import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import StyledButton from './styledbutton';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header title="My React Application" />
      <Content />
      <StyledButton />
      <Footer />
    </div>
  );
}

export default App;