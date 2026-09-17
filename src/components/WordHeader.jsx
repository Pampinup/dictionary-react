function WordHeader({ word, phonetic, partsOfSpeech }) {
  return (
    <section className="word-header">
      <div className="word-title">
        <h1>{word}</h1>

        <div className="part-of-speech-list">
          {partsOfSpeech.map((partOfSpeech) => (
            <span className="part-of-speech" key={partOfSpeech}>
              {partOfSpeech}
            </span>
          ))}
        </div>
      </div>

      <div className="pronunciation">
        <span>{phonetic}</span>
      </div>

      <button type="button" className="audio-button">
        <i className="bi bi-volume-up-fill"></i>
        Listen
      </button>
    </section>
  );
}

export default WordHeader;
