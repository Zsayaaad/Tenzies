import { useEffect, useRef, useState } from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { formatTime } from "./formatTime";

const generateAllNewDice = () => {
  const arr = [{}];
  for (let i = 0; i < 10; i++) {
    arr[i] = {
      id: i,
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  return arr;
};

const App = () => {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [bestTime, setBestTime] = useState(() => {
    return JSON.parse(localStorage.getItem("tenziesBestTime")) || 0;
  });
  // roll counter to see in how few rolls you could win the game.
  const [rollCounter, setRollCounter] = useState(0);

  // In React, the preferred way to access a DOM node is by using a ref.
  const buttonRef = useRef(null);

  /**
   * - loop on dice elements
   * -- break if ( die.isHeld == false)
   * -- take the first die.value
   * --- break also if die.value != the first value
   */
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    buttonRef.current.focus();

    if (gameWon) {
      setBestTime((prevBest) => {
        if (prevBest === 0 || prevBest > time) {
          localStorage.setItem("tenziesBestTime", JSON.stringify(time));
          return time;
        }
        return prevBest;
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameWon]);

  useEffect(() => {
    let interval = null;
    if (!gameWon && timerActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Clean Up Function
    return () => clearInterval(interval);
  }, [timerActive, gameWon]);

  const rollDice = () => {
    if (!gameWon) {
      if (!timerActive) setTimerActive(true);
      // loop over dice elements
      // - if any die has falsy held prop
      // -- update it's value
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.isHeld === false
            ? { ...die, value: Math.ceil(Math.random() * 6) }
            : die;
        });
      });
      setRollCounter((prev) => prev + 1);
    } else {
      setDice(generateAllNewDice());
      setTime(0);
      setTimerActive(false);
      setRollCounter(0);
    }
  };

  const hold = (id) => {
    if (!gameWon && !timerActive) setTimerActive(true);
    // loop on dice elements to get the die that has this id
    // make it's isHeld property to true
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  };

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="time-container">
          <div className="stat-box">
            <span className="stat-label">Rolls</span>
            <span className="stat-value">{rollCounter}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Time</span>
            <span className="stat-value">{formatTime(time)}</span>
          </div>
          <div className="stat-box best-time">
            <span className="stat-label">Best</span>
            <span className="stat-value">
              {bestTime > 0 ? formatTime(bestTime) : "--:--"}
            </span>
          </div>
        </div>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;
