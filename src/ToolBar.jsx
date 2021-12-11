import { createRef } from "react"

export default function ToolBar(props) {
  const { stage, startGame, checkCards, delays, delay, setDelay } = props

  const selectRef = createRef()
  const handleChange = () => setDelay(selectRef.current.value)

  return (
    <div id="toolbar">
      {
        stage === 'inMenu' ? (
          <>
            <button id="start" onClick={startGame}>
              Start the game
            </button>
            <select ref={selectRef} onChange={handleChange} value={delay}>
              {
                delays.map((delay, i) => <option value={delay} key={i}>
                  {delay} seconds
                </option>)
              }
            </select>
          </>
        ) : (
          <>
            <h3>Remember the card content you've seen</h3>
            <button id="submit" onClick={checkCards}>
              Submit solution
            </button>
          </>
        )
      }
    </div>
  )
}
