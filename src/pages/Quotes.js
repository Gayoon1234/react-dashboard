import React from "react";
import "../styles/Quote.css"

const QuoteList = [
  {
    quote:
      "Here Come The Test Results: You Are A Horrible Person. We Weren’t Even Testing For That.",
    author: "GLaDOS",
    source: "Portal 2",
  },
  {
    quote: "Hello! This is the part where I kill you.",
    author: "Wheatley",
    source: "Portal 2",
  },
  {
    quote: "Huuuuuh",
    author: "Minecraft Villager",
    source: "Minecraft",
  },
  {
    quote:
      "The surest way to tame a prisoner is to let him believe he is free.",
    author: "Kier Eagan",
    source: "Severance",
  },
  {
    quote:
      "What's the value of swearing an oath if you only stick to it when it's easy.",
    author: "Sherriff Holston",
    source: "Silo",
  },
  {
    quote: "Lisbon!",
    author: "Patrick Jane",
    source: "The Mentalist",
  },
  {
    quote:
      "You tried your best and you failed miserably. The lesson is: Never try.",
    author: "Homer Simpson",
    source: "The Simpsons",
  },
  {
    quote: "It’s not bragging if it’s true.",
    author: "Harvey Specter",
    source: "Suits",
  },
  {
    quote: "I feel like the prettiest girl at the dance.",
    author: "Archie Andrews",
    source: "Riverdale",
  },
  {
    quote: 'Suddenly, I have very little faith in us saving ourselves.',
    author: "Ben Stone",
    source: "Manifest",
  },
  {
    quote: "Nothing bad ever happens to the Kennedys",
    author: "JFK",
    source: "Clone High",
  },
  {
    quote: "Insolence? We Are Pirates. We Don't Even Know What That Means!",
    author: "Hondo Ohnaka",
    source: "Star Wars TCW",
  },
];

function getRandomElementFromArray() {
    const randomIndex = Math.floor(Math.random() * QuoteList.length);
    return QuoteList[randomIndex];
  }
  
function Quotes() {
    const quote = getRandomElementFromArray();
  return (
    <div>
        <blockquote className="quote">"{quote.quote}"</blockquote>
        <p className="quote-source">{quote.author} from {quote.source}</p>
    </div>
  );
}

export default Quotes;
