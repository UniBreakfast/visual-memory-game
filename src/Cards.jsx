import { useState } from "react"

export default function Cards({ palette, boardState }) {
  const [cardsState, setCardsState] = useState([...Array(9)])

  return (
    <div id="cards">
      {
        boardState.map((color, i) => <div
          className="card"
          style={{ background: palette[color] }}
          key={i}
        ></div>)
      }

      <div id="inputBar">
        {palette.map((color, i) =>
          <div className="card" key={i} style={{ background: color }}></div>)}
      </div>
    </div>
  )
}
