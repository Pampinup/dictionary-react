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

    const languageSettings = {
      Spanish: {
        lang: "es-ES",
        languageCode: "es",
      },
      French: {
        lang: "fr-FR",
        languageCode: "fr",
      },
      Portuguese: {
        lang: "pt-PT",
        languageCode: "pt",
      },
      Irish: {
        lang: "ga-IE",
        languageCode: "ga",
      },
      German: {
        lang: "de-DE",
        languageCode: "de",
      },
      Italian: {
        lang: "it-IT",
        languageCode: "it",
      },
    };

    const settings = languageSettings[language];

    if (settings) {
      utterance.lang = settings.lang;

      const voices = window.speechSynthesis.getVoices();

      const matchingVoice =
        voices.find(
          (voice) => voice.lang.toLowerCase() === settings.lang.toLowerCase(),
        ) ||
        voices.find((voice) =>
          voice.lang.toLowerCase().startsWith(settings.languageCode),
        );

      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }
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
