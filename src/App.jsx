import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SuggestedWords from "./components/SuggestedWords";
import WordHeader from "./components/WordHeader";
import Definitions from "./components/Definitions";
import Synonyms from "./components/Synonyms";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <SearchBar />
          <SuggestedWords />
          <WordHeader
            word="Aurora"
            phonetic="/aʊˈrɔːrə/"
            partOfSpeech="sustantivo femenino"
            origin="Latín"
          />
          <Definitions />
          <Synonyms />
        </div>
      </main>
    </>
  );
}

export default App;
