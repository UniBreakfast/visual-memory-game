import { useState } from "react"
import ToolBar from "./ToolBar.jsx"
import Cards from "./Cards.jsx"

export default function MemoryGame() {
  const [stage, setStage] = useState('inMenu')

  const startGame = () => {
    setStage('memorization')
  }

  const checkCards = () => {
    // setStage('review')
    setStage('inMenu')
  }

  return (
    <main id="gameBox">
      <Cards/>
      <ToolBar {...{stage, startGame, checkCards}}/>
    </main>
  )
}
