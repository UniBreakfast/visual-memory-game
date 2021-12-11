import { useState } from "react"
import ToolBar from "./ToolBar.jsx"
import Cards from "./Cards.jsx"
import genBoardState from "./boardGenerator.js"

export default function MemoryGame() {
  const [stage, setStage] = useState('inMenu')
  const [boardState, setBoardState] = useState([])
  const [palette, setPalette] = useState([])
  const [delay, setDelay] = useState(delays[2])

  const startGame = () => {
    const {palette, cellColors} = genBoardState()
    setPalette(palette)
    setBoardState(cellColors)
    setStage('memorization')
  }

  const checkCards = () => {
    // setStage('review')
    setStage('inMenu')
  }

  return (
    <main id="gameBox">
      <Cards {...{palette, boardState}}/>
      <ToolBar {...{stage, startGame, checkCards, delays, delay, setDelay}}/>
    </main>
  )
}

const delays = ['4', '7', '10', '12', '15']
