function Synonyms() {
  const synonyms = ["alba", "amanecer", "alborada", "madrugada", "crepúsculo"];

  return (
    <section className="synonyms">
      <h2>Sinónimos</h2>

      <div className="synonyms-list">
        {synonyms.map((synonym) => (
          <button key={synonym} type="button">
            {synonym}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Synonyms;
