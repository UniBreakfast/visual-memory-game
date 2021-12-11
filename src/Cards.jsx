import { useState } from "react"

export default function Cards({ stage, palette, boardState }) {
  const [cardsState, setCardsState] = useState(arr9)
  const [inputVisible, setInputVisible] = useState(false)

  const showInputBar = i => {
    setInputVisible(true)
  }

  const inputColor = (i, color) => {
    setInputVisible(false)
  }

  return (
    <div id="cards">
      {stage === 'memorization'
        ? boardState.map((color, i) => <div
          className="card"
          style={{ background: palette[color] }}
          key={i}
        ></div>)
        : stage === 'inGame'
          ? cardsState.map((color, i) => <button
            className="card"
            style={{ background: palette[color] }}
            onClick={showInputBar}
            key={i}
          ></button>)
          : arr9.map((_, i) => <div className="card" key={i}></div>)
      }

      {inputVisible && <div id="inputBar">
        {palette.map((color, i) =>
          <button
            className="card"
            style={{ background: color }}
            onClick={inputColor}
            key={i}
          ></button>)}
      </div>}
    </div>
  )
}

const arr9 = [...Array(9)]
