function Grammar({ grammar, loading, error }) {
  if (loading) {
    return (
      <section className="grammar">
        <div className="grammar-loading">
          <span className="loading-spinner"></span>
          <p>Generating grammar...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="grammar">
        <p className="grammar-error">{error}</p>
      </section>
    );
  }

  if (!grammar?.uses?.length) {
    return null;
  }

  return (
    <section className="grammar">
      <div className="grammar-header">
        <div>
          <h2>Grammar</h2>
          <p>Practical English usage</p>
        </div>

        <span className="grammar-ai-badge">
          <i className="bi bi-stars"></i>
          AI assisted
        </span>
      </div>

      <div className="grammar-list">
        {grammar.uses.map((use, index) => (
          <article
            className="grammar-card"
            key={`${use.partOfSpeech}-${index}`}
          >
            <h3>{use.partOfSpeech}</h3>

            <p className="grammar-usage">{use.usage}</p>

            <div className="grammar-section">
              <h4>Grammar points</h4>

              <ul className="grammar-points">
                {use.grammarPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="grammar-section">
              <h4>Common structures</h4>

              <ul className="grammar-structures">
                {use.structures.map((structure, structureIndex) => (
                  <li key={structureIndex}>
                    <code>{structure}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grammar-section">
              <h4>Examples</h4>

              <div className="grammar-examples">
                {use.examples.map((example, exampleIndex) => (
                  <p key={exampleIndex}>“{example}”</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Grammar;
