function WordHeader({ word, phonetic, partOfSpeech, origin }) {
  return (
    <section className="word-header">
      <div className="word-title">
        <h1>{word}</h1>
        <span className="part-of-speech">{partOfSpeech}</span>
      </div>

      <div className="pronunciation">
        <span>{phonetic}</span>
      </div>

      <button type="button" className="audio-button">
        <i className="bi bi-volume-up-fill"></i>
        Escuchar
      </button>

      <div className="origin">
        <span>ORIGEN</span>
        <p>{origin}</p>
      </div>
    </section>
  );
}

export default WordHeader;
