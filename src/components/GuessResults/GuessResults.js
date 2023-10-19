import React from 'react';

function GuessResults({guessList}) {
  return (
    <div className="guess-results">
      {guessList.map((item, index) => (
        <p className='guess' key={index}>{item}</p>
      ))}
    </div>);
}

export default GuessResults;
