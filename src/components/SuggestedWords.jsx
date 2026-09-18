function SuggestedWords({ onSearch }) {
  const words = ["Aurora", "Bioluminescence", "Halloween", "Autumn", "Sunset"];

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
