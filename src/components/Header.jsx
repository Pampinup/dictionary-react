function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <a
          className="header-brand"
          href="https://desing-main-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DICTIONARY · EN
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a
            href="https://desing-main-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>

          <a href="./about">About</a>

          <a
            href="https://github.com/Pampinup/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
