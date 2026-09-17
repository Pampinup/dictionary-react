import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SuggestedWords from "./components/SuggestedWords";
import WordHeader from "./components/WordHeader";
import Definitions from "./components/Definitions";
import Synonyms from "./components/Synonyms";
import VisualContext from "./components/VisualContext";

import { searchWord } from "./services/dictionaryApi";
import { searchImages } from "./services/pexelsApi";

import "./App.css";

function App() {
  const [wordData, setWordData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(word) {
    setLoading(true);
    setError("");
    setWordData(null);

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

              <Definitions meanings={wordData.meanings} />
              <Synonyms meanings={wordData.meanings} onSearch={handleSearch} />
              <VisualContext photos={photos} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
