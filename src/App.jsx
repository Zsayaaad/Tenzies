import { useState } from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";

const generateAllNewDice = () => {
  const arr = [{}];
  for (let i = 0; i < 10; i++) {
    arr[i] = { id: i, value: Math.ceil(Math.random() * 6), isHeld: false };
  }

  return arr;
};

const App = () => {
  const [dice, setDice] = useState(() => generateAllNewDice());

  /**
   * - loop on dice elements
   * -- break if ( die.isHeld == false)
   * -- take the first die.value
   * --- break also if die.value != the first value
   */
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  if (gameWon) {
    console.log("You won!");
  }

  const rollDice = () => {
    if (!gameWon) {
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
    } else {
      setDice(generateAllNewDice());
    }
  };

  const hold = (id) => {
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
      </div>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;
