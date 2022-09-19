import LetterTile from "./LetterTile";
import "./LetterRow.css";

const LetterRow = () => {
  return (
    <section className="letterRow">
      <LetterTile />
      <LetterTile />
      <LetterTile />
      <LetterTile />
      <LetterTile />
    </section>
  );
};

export default LetterRow;
