import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SuggestedWords from "./components/SuggestedWords";
import WordHeader from "./components/WordHeader";
import Definitions from "./components/Definitions";
import Synonyms from "./components/Synonyms";
import VisualContext from "./components/VisualContext";
import Grammar from "./components/Grammar";
import Translation from "./components/Translation";
import Footer from "./components/Footer";

import { searchWord } from "./services/dictionaryApi";
import { searchImages } from "./services/pexelsApi";
import { getGrammar } from "./services/aiApi";

import "./App.css";

function App() {
  const [wordData, setWordData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("definitions");
  const [grammar, setGrammar] = useState(null);
  const [grammarLoading, setGrammarLoading] = useState(false);
  const [grammarError, setGrammarError] = useState("");

  async function handleSearch(word) {
    setLoading(true);
    setError("");
    setWordData(null);
    setActiveTab("definitions");
    setGrammar(null);
    setGrammarError("");

    try {
      const data = await searchWord(word);
      setWordData(data);

      const imageData = await searchImages(word);
      setPhotos(imageData.photos);
    } catch {
      setError("We couldn't find that word.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGrammarClick() {
    setActiveTab("grammar");

    if (grammar) {
      return;
    }

    if (!wordData) {
      return;
    }

    setGrammarLoading(true);
    setGrammarError("");

    try {
      const data = await getGrammar(wordData.word, wordData.meanings);
      setGrammar(data);
    } catch {
      setGrammarError("Grammar information is currently unavailable.");
    } finally {
      setGrammarLoading(false);
    }
  }

  function handleTabChange(tab) {
    if (tab === "grammar") {
      handleGrammarClick();
      return;
    }

    setActiveTab("definitions");
  }

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <SearchBar onSearch={handleSearch} />

          <SuggestedWords onSearch={handleSearch} />

          {loading && (
            <div className="search-loading" role="status">
              <span className="loading-spinner"></span>
              <p>Searching...</p>
            </div>
          )}

          {error && (
            <div className="search-error" role="alert">
              <i className="bi bi-search"></i>
              <h2>Word not found</h2>
              <p>{error}</p>
              <span>Try searching for another English word.</span>
            </div>
          )}

          {wordData && (
            <>
              <WordHeader
                word={wordData.word}
                phonetic={wordData.phonetic}
                partsOfSpeech={[
                  ...new Set(
                    wordData.meanings.map((meaning) => meaning.partOfSpeech),
                  ),
                ]}
              />

              <Translation key={wordData.word} word={wordData.word} />

              <Definitions
                meanings={wordData.meanings}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />

              {activeTab === "grammar" && (
                <Grammar
                  grammar={grammar}
                  loading={grammarLoading}
                  error={grammarError}
                />
              )}

              <Synonyms meanings={wordData.meanings} onSearch={handleSearch} />

              <VisualContext photos={photos} />
            </>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
