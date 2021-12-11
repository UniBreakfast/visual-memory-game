export default function ToolBar({ stage, startGame, checkCards }) {

  return (
    <div id="toolbar">
      {
        stage === 'inMenu' ? (
          <>
            <button id="start" onClick={startGame}>
              Start the game
            </button>
            <select id="difficultySelect">
              <option value="4">4 seconds</option>
              <option value="7">7 seconds</option>
              <option value="10">10 seconds</option>
              <option value="12">12 seconds</option>
              <option value="15">15 seconds</option>
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
