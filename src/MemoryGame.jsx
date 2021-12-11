import { useState } from "react"
import ToolBar from "./ToolBar.jsx"
import Cards from "./Cards.jsx"
import genBoardState from "./boardGenerator.js"

export default function MemoryGame() {
  const [stage, setStage] = useState('inMenu')
  const [boardState, setBoardState] = useState([...Array(9)])
  const [palette, setPalette] = useState([...Array(6)])
  const [delay, setDelay] = useState(delays[2])

  const startGame = () => {
    const { palette, colorSet } = genBoardState()
    setPalette(palette)
    setBoardState(colorSet)
    setStage('memorization')
    setTimeout(playGame, delay * 1000)
  }

  const playGame = () => {
    setStage('inGame')
  }

  const checkCards = () => {
    // setStage('review')
    setStage('inMenu')
  }

  return (
    <main id="gameBox">
      <Cards {...{ stage, palette, boardState }} />
      <ToolBar {...{ stage, startGame, checkCards, delays, delay, setDelay }} />
    </main>
  )
}

const delays = ['4', '7', '10', '12', '15']

delays[2] /= 10
