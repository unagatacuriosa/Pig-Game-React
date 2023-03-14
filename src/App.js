import "./App.css";
import { useState } from "react";
import Player from "./Player";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [current, setCurrent] = useState(0);
  const [dice, setDice] = useState(0);
  // será 1 o 2
  const [activePlayer, setActivePlayer] = useState(1);
  const maxScore = 100;

  const starGame = () => {
    setScore1(0);
    setScore2(0);
    setCurrent(0);
    setDice(0);
    setActivePlayer(1);
  };
  const rollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setDice(num);
    if (num === 1) {
      setCurrent(0);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    } else {
      //setCurrent(current + num);
      setCurrent((current) => current + num); //por si falla
    }
  };

  const hold = () => {
    if (Math.max(score1, score2) <= maxScore)
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    if (activePlayer === 1) {
      setScore1(score1 + current);
    } else {
      setScore2(score2 + current);
    }
    setCurrent(0);
  };

  return (
    <main>
      <Player
        title={score1 > maxScore ? "WINNER!!!" : "jugador 1"}
        score={score1}
        current={activePlayer === 1 ? current : 0}
        active={activePlayer === 1}
      />
      <Player
        title={score2 > maxScore ? "WINNER!!!" : "jugador 2"}
        score={score2}
        current={activePlayer === 2 ? current : 0}
        active={activePlayer === 2}
      />
      {dice && (
        <img src={`img/dice-${dice}.png`} alt="Playing dice" className="dice" />
      )}
      <button className="btn btn--new" onClick={starGame}>
        🔄 New game
      </button>
      <button
        className="btn btn--roll"
        onClick={rollDice}
        disabled={Math.max(score1, score2) > maxScore}
      >
        🎲 Roll dice
      </button>
      <button
        className="btn btn--hold"
        onClick={hold}
        disabled={Math.max(score1, score2) > maxScore}
      >
        📥 Hold
      </button>
    </main>
  );
}

export default App;
