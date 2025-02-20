import { useState } from "react";
import Dice from "./components/Dice/Dice";
import Nav from "./components/Nav/Nav";


function App() {
  const [diceId, setDiceId] = useState(1 + Math.floor(Math.random() * 6));

  function rollDice() {
    let newDice = 1 + Math.floor(Math.random() * 6)

    // Если выпадает старое значение, то перекидываем кубик заного
    if (newDice === diceId) {
      rollDice()
      return
    }
    setDiceId(newDice)

  }

  return (
    <article>
      <Nav />

      <Dice dice={diceId} />

      <button className="roll-dice" onClick={rollDice}>Кинуть кубик</button>
    </article>
  )
}

export default App;
