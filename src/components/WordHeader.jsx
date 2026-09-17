import { useState } from "react";

function WordHeader({ word, phonetic, partsOfSpeech }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  function handleSpeak() {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);

    utterance.lang = "en-US";

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }
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

      <button
        type="button"
        className={`audio-button ${isSpeaking ? "speaking" : ""}`}
        onClick={handleSpeak}
        disabled={isSpeaking}
      >
        <i className="bi bi-volume-up-fill"></i>
        {isSpeaking ? "Speaking..." : "Listen"}
      </button>
    </section>
  );
}

export default WordHeader;
