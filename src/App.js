import React, { useState } from 'react';
import quotes from "./database";
import "./App.css";


function App() {

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div>
    <div>
      <p >"{quote.quote}"</p>
      <p >– {quote.by}</p>
      <button  onClick={handleNewQuote}>New Quote</button>
    </div>
  </div>
  )
}

export default App;
