function Definitions() {
  const definitions = [
    {
      definition:
        "Fenómeno luminoso que aparece en el cielo de las regiones polares, producido por la interacción de partículas cargadas del viento solar con la atmósfera.",
      example:
        "La aurora boreal iluminó el cielo con ondas de color esmeralda.",
    },
    {
      definition:
        "Luz difusa que precede a la salida del sol; el comienzo del día.",
      example: "Nos despertamos con la aurora y emprendimos el camino.",
    },
    {
      definition: "Principio o comienzo de algo; el alba de un período.",
      example: "Vive en la aurora de una nueva era tecnológica.",
    },
  ];

  return (
    <section className="definitions">
      <div className="definitions-tabs">
        <button type="button" className="active">
          Definiciones
        </button>

        <button type="button">Gramática</button>
      </div>

      <div className="definition-list">
        {definitions.map((item, index) => (
          <article className="definition" key={index}>
            <div className="definition-number">{index + 1}</div>

            <div className="definition-content">
              <p className="definition-text">{item.definition}</p>

              <p className="definition-example">“{item.example}”</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Definitions;
