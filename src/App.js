import logo from './logo.svg';
import './App.css';
import WordGuess from './components/WordGuess';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WordGuess />
      </header>
    </div>
  );
}

export default App;
