function VisualContext({ photos }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section className="visual-context">
      <h2>Visual Context</h2>

      <div className="visual-grid">
        {photos.map((photo) => (
          <article className="visual-card" key={photo.id}>
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                src={photo.src.landscape}
                alt={photo.alt || "Visual context"}
              />
            </a>

            <p className="photo-credit">
              Photo by{" "}
              <a href={photo.photographer_url} target="_blank" rel="noreferrer">
                {photo.photographer}
              </a>{" "}
              on Pexels
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VisualContext;
