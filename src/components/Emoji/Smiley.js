import React from 'react';
import './Smiley.css'

function Smiley({ emoji, count, onClick }) {
  return (
    <div className="smiley" onClick={onClick}>
      <p className='emoji' role="img" aria-label="emoji">
        {emoji}
      </p>
      <p className="count">{count}</p>
    </div>
  );
}

export default Smiley;