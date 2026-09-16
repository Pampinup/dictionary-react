function SuggestedWords() {
  const words = ["Aurora", "Bioluminiscencia", "Umbral", "Quimera", "Éter"];

  return (
    <div className="suggested-words">
      {words.map((word) => (
        <button key={word} type="button" className="suggested-word">
          {word}
        </button>
      ))}
    </div>
  );
}

export default SuggestedWords;
