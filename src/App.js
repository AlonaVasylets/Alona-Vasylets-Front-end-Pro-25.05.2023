import React, { useState } from 'react';
import Smiley from './components/Emoji/Smiley';
import './App.css';



function App() {
  const [smileys, setSmileys] = useState([
    { emoji: '😃', count: 0 },
    { emoji: '😊', count: 0 },
    { emoji: '🥰', count: 0 },
    { emoji: '😜', count: 0 },
    { emoji: '🤣', count: 0 },
    { emoji: '😍', count: 0 },
    { emoji: '😉', count: 0 },
  ]);

  const handleSmileyClick = (index) => {
    if (showResults) return;
    const updatedSmileys = [...smileys];
    updatedSmileys[index].count++;
    setSmileys(updatedSmileys);
  };

  const findWinningSmiley = () => {
    const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
    const winningSmileys = smileys.filter((smiley) => smiley.count === maxCount);
    return winningSmileys;
  };

  const [showResults, setShowResults] = useState(false);

  return (
    <div className="app">
      <div className="smiley-container">
        {smileys.map((smiley, index) => (
          <Smiley
            key={index}
            emoji={smiley.emoji}
            count={smiley.count}
            onClick={() => handleSmileyClick(index)}
          />
        ))}
      </div>
      <button className='button' onClick={() => setShowResults(true)}>Show Results</button>
      {showResults && (
        <div className="results">
          <h1>Winning Smilies</h1>
          {findWinningSmiley().map((smiley, index) => (
            <Smiley key={index} emoji={smiley.emoji} count={smiley.count} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;