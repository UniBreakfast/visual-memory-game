import { useState } from "react"
import ToolBar from "./ToolBar.jsx"
import Cards from "./Cards.jsx"

export default function MemoryGame() {
  const [stage, setStage] = useState('inMenu')

  return (
    <main id="gameBox">
      <Cards/>
      <ToolBar/>
    </main>
  )
}
