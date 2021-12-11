export default function Cards({ palette, boardState }) {

  return (
    <div id="cards">
      {
        boardState.map((color, i) => <div
          className="card"
          style={{ background: color }}
          key={i}
        ></div>)
      }

      <div id="inputBar">
        {palette.map((color, i) => <div className="card" key={i} style={{background: color}}></div>)}
      </div>
    </div>
  )
}
