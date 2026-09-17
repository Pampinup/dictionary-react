function Synonyms({ meanings, onSearch }) {
  const synonyms = [
    ...new Set(meanings.flatMap((meaning) => meaning.synonyms || [])),
  ].slice(0, 10);

  if (synonyms.length === 0) {
    return null;
  }

  return (
    <section className="synonyms">
      <h2>Synonyms</h2>

      <div className="synonyms-list">
        {synonyms.map((synonym) => (
          <button type="button" key={synonym} onClick={() => onSearch(synonym)}>
            {synonym}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Synonyms;
