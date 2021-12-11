import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main id="gameBox">
        <div id="cards">
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>

          <div id="inputBar">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>
        </div>
        <div id="toolbar">
          <div class="ingame">
            <h3>Remember the card content you've seen</h3>
            <button id="submit" onclick="gameBox.className=''">Submit solution</button>
          </div>

          <div class="inmenu">
            <button id="start" onclick="gameBox.className='ingame'">
              Start the game
            </button>
            <select id="difficultySelect">
              <option value="4">4 seconds</option>
              <option value="7">7 seconds</option>
              <option value="10">10 seconds</option>
              <option value="12">12 seconds</option>
              <option value="15">15 seconds</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
