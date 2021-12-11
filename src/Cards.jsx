export default function Cards({ boardState }) {

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
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  )
}
