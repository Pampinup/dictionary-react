function SearchBar() {
  return (
    <form className="search-form">
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Buscar una palabra..."
          aria-label="Buscar una palabra"
        />

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
