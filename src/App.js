import "./App.css";
import LetterRow from "./components/LetterRow";

function App() {
  return (
    <section className="App">
      <nav className="nav">
        <p>Word Game</p>
      </nav>
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <button className="submit-button">Submit</button>
    </section>
  );
}

export default App;
