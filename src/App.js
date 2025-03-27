import React, { useState } from "react";
import quotes from "./database";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3eddf",
          width: "500px",
          height: "300px",
          padding: "20px",
        }}
      >
        <p style={{fontFamily: "Times New Roman", fontSize: "30px"}}>"{quote.quote}"</p>
        <p>– {quote.by}</p>
        <button onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
