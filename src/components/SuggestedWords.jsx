function SuggestedWords({ onSearch }) {
  const words = ["Aurora", "Bioluminescence", "Threshold", "Chimera", "Aether"];

  return (
    <div className="suggested-words">
      {words.map((word) => (
        <button
          key={word}
          type="button"
          className="suggested-word"
          onClick={() => onSearch(word)}
        >
          {word}
        </button>
      ))}
    </div>
  );
}

export default SuggestedWords;
