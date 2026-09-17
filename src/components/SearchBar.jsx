function SearchBar({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const word = formData.get("word").trim();

    if (!word) {
      return;
    }

    onSearch(word);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          name="word"
          className="form-control"
          placeholder="Search for a word..."
          aria-label="Search for a word"
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
