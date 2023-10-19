import React from 'react';

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = React.useState("")
  function handleSubmit(event) {
    event.preventDefault()
      handleGuessSubmit(guess)
      setGuess('')
  }
  return (
  <form 
    className="guess-input-wrapper"
    onSubmit={handleSubmit}
  >
    <label htmlFor='guess-input'>Enter guess:</label>
    <input
      required
      id='guess-input'
      maxLength={5}
      pattern='[A-Z]{5}'
      title='Five letter word'
      value={guess}
      onChange={event => {
        setGuess(event.target.value.toUpperCase())
      }}
    />
  </form>
)}

export default GuessInput;
