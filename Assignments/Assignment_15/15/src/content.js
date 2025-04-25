import React, { useState } from 'react';

function Content() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the developer go broke? Because he used up all his cache!",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!"
  ];

  const [joke, setJoke] = useState('');

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="content">
      <h2>Random Joke Generator</h2>
      <button onClick={getRandomJoke}>Get Random Joke</button>
      {joke && <p className="joke">{joke}</p>}
    </div>
  );
}

export default Content;