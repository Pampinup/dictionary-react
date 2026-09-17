function Definitions({ meanings, activeTab, onTabChange }) {
  const groupedMeanings = meanings.reduce((groups, meaning) => {
    const partOfSpeech = meaning.partOfSpeech;

    if (!groups[partOfSpeech]) {
      groups[partOfSpeech] = [];
    }

    groups[partOfSpeech].push(meaning);

    return groups;
  }, {});

  return (
    <section className="definitions">
      <div className="definitions-tabs">
        <button
          type="button"
          className={activeTab === "definitions" ? "active" : ""}
          onClick={() => onTabChange("definitions")}
        >
          Definitions
        </button>

        <button
          type="button"
          className={activeTab === "grammar" ? "active" : ""}
          onClick={() => onTabChange("grammar")}
        >
          Grammar
        </button>
      </div>

      {activeTab === "definitions" && (
        <div className="definition-list">
          {Object.entries(groupedMeanings).map(
            ([partOfSpeech, definitions]) => (
              <div className="definition-group" key={partOfSpeech}>
                <h3 className="definition-group-title">{partOfSpeech}</h3>

                {definitions.slice(0, 5).map((meaning, index) => (
                  <article
                    className="definition"
                    key={`${partOfSpeech}-${index}`}
                  >
                    <div className="definition-number">{index + 1}</div>

                    <div className="definition-content">
                      <p className="definition-text">{meaning.definition}</p>

                      {meaning.example && (
                        <p className="definition-example">
                          “{meaning.example}”
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ),
          )}
        </div>
      )}
    </section>
  );
}

export default Definitions;
