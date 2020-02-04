import React, { useState } from 'react';
import classes from './App.module.css';

const App = () => {
  const myText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const [indexes, setIndexes] = useState({})
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const colorWave = () => {
    setButtonDisabled(true)
    let indexArr = [-1, 0, 1]
    const interval = setInterval(() => {
        indexArr = indexArr.map(a => a + 1)
        setIndexes({
          indexOne: indexArr[0],
          indexTwo: indexArr[1],
          indexThree: indexArr[2]
        })
      }, 30)
    setTimeout(() => {
      clearInterval(interval)
      setIndexes({})
      setButtonDisabled(false)
    }, (myText.length) * 30)
  }
  return (
    <div className={classes.App}>
      <button className={classes.button} disabled={buttonDisabled} onClick={colorWave}>Colorize</button>
      <h1 className={classes.textContainer}>{myText.split('').map((letter, index) => <span className={
        index === indexes.indexOne || index === indexes.indexTwo || index === indexes.indexThree ? classes.Red : null
      }>{letter}</span>)}</h1>
    </div>
  );
}

export default App
