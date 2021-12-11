import { useState } from "react"
import ToolBar from "./ToolBar.jsx"
import Cards from "./Cards.jsx"
import genBoardState from "./boardGenerator.js"

export default function MemoryGame() {
  const [stage, setStage] = useState('inMenu')
  const [boardState, setBoardState] = useState([])

  const startGame = () => {
    setBoardState(genBoardState())
    setStage('memorization')
  }

  const checkCards = () => {
    // setStage('review')
    setStage('inMenu')
  }

  return (
    <main id="gameBox">
      <Cards {...{boardState}}/>
      <ToolBar {...{stage, startGame, checkCards}}/>
    </main>
  )
}
