import { useState } from "react"

export default function Cards(props) {
  const { stage, palette, boardState, cardsState, setCardsState } = props
  const [inputVisible, setInputVisible] = useState(false)
  const [indexToInput, setIndexToInput] = useState(0)

  const showInputBar = i => {
    setIndexToInput(i)
    setInputVisible(true)
  }

  const inputColor = (i, color) => {
    setCardsState(Object.assign([...cardsState], { [i]: color }))
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
            onClick={() => showInputBar(i)}
            key={i}
          ></button>)
          : stage === 'review'
            ? boardState.map((color, i) => <div
              className="card"
              style={{ background: palette[color] }}
              onClick={() => showInputBar(i)}
              key={i}
            >
              {
                color !== cardsState[i] && <div
                  className="mistake"
                  style={{ background: palette[cardsState[i]] }}
                ></div>
              }
            </div>)
            : arr9.map((_, i) => <div className="card" key={i}></div>)
      }

      <div
        id="inputBar"
        style={{ transform: `translate(${indexToInput % 3 * step - step}%, ${Math.floor(indexToInput / 3) * step - step}%)`, ...inputVisible? {} : {width: 0, height: 0} }}
      >
        {palette.map((color, i) =>
          <button
            className="card"
            style={{ background: color }}
            onClick={() => inputColor(indexToInput, i)}
            key={i}
          ></button>)}
      </div>
    </div>
  )
}

const step = 70

const arr9 = [...Array(9)]
