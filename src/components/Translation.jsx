import { useState } from "react";

import { translateWord } from "../services/aiApi";

function Translation({ word }) {
  const [translation, setTranslation] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleTranslation(targetLanguage) {
    setLanguage(targetLanguage);
    setLoading(true);
    setError("");
    setTranslation("");

    try {
      const data = await translateWord(word, targetLanguage);
      setTranslation(data.translation);
    } catch {
      setError("Translation is currently unavailable.");
    } finally {
      setLoading(false);
    }
  }

  function handleSpeak() {
    if (!translation || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(translation);

    if (language === "Spanish") {
      utterance.lang = "es-ES";
    }

    if (language === "French") {
      utterance.lang = "fr-FR";
    }

    if (language === "Portuguese") {
      utterance.lang = "pt-PT";
    }

    if (language === "Irish") {
      utterance.lang = "ga-IE";
    }

    if (language === "German") {
      utterance.lang = "de-DE";
    }

    if (language === "Italian") {
      utterance.lang = "it-IT";
    }

    window.speechSynthesis.speak(utterance);
  }

  return (
    <section className="translation">
      <div className="translation-header">
        <h2>Translation</h2>
      </div>

      <div className="translation-buttons">
        <button
          type="button"
          className={language === "Spanish" ? "active" : ""}
          onClick={() => handleTranslation("Spanish")}
          disabled={loading}
        >
          🇪🇸 Spanish
        </button>

        <button
          type="button"
          className={language === "French" ? "active" : ""}
          onClick={() => handleTranslation("French")}
          disabled={loading}
        >
          🇫🇷 French
        </button>

        <button
          type="button"
          className={language === "Portuguese" ? "active" : ""}
          onClick={() => handleTranslation("Portuguese")}
          disabled={loading}
        >
          🇵🇹 Portuguese
        </button>

        <button
          type="button"
          className={language === "Irish" ? "active" : ""}
          onClick={() => handleTranslation("Irish")}
          disabled={loading}
        >
          🇮🇪 Irish
        </button>

        <button
          type="button"
          className={language === "German" ? "active" : ""}
          onClick={() => handleTranslation("German")}
          disabled={loading}
        >
          🇩🇪 German
        </button>

        <button
          type="button"
          className={language === "Italian" ? "active" : ""}
          onClick={() => handleTranslation("Italian")}
          disabled={loading}
        >
          🇮🇹 Italian
        </button>
      </div>

      {loading && (
        <div className="translation-loading" role="status">
          <span className="loading-spinner"></span>
          <p>Translating...</p>
        </div>
      )}

      {translation && !loading && (
        <div className="translation-result">
          <span className="translation-word">{word}</span>

          <i className="bi bi-arrow-right"></i>

          <strong>{translation}</strong>

          <button
            type="button"
            className="translation-audio-button"
            onClick={handleSpeak}
            aria-label={`Listen to ${translation}`}
            title={`Listen to ${translation}`}
          >
            <i className="bi bi-volume-up-fill"></i>
            <span>Listen</span>
          </button>
        </div>
      )}

      {error && (
        <p className="translation-error" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

export default Translation;
