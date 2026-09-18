import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <main className="about-page">
        <div className="about-container">
          <Link className="about-back" to="/">
            ← Back to dictionary
          </Link>

          <section className="about-content">
            <p className="about-label">ABOUT THE PROJECT</p>

            <h1>Dictionary App</h1>

            <p className="about-intro">
              A modern English dictionary designed to make exploring new words
              simple, practical and engaging.
            </p>

            <div className="about-section">
              <h2>What is it?</h2>

              <p>
                This application was built as part of the SheCodes React
                workshop. It combines dictionary data with additional
                language-learning features to help users understand and explore
                English words.
              </p>

              <p>
                Users can search for words and explore definitions,
                pronunciation, examples, synonyms, translations and practical
                grammar explanations.
              </p>
            </div>

            <div className="about-section">
              <h2>Built with React</h2>

              <p>
                The application is built with React and Vite, using reusable
                components, React state and asynchronous API requests.
              </p>

              <p>
                It integrates the SheCodes Dictionary API, SheCodes AI API and
                Pexels API to provide dynamic dictionary content, AI-assisted
                grammar explanations, translations and visual context.
              </p>
            </div>

            <div className="about-section">
              <h2>Language learning</h2>

              <p>
                The app also includes browser-based pronunciation and
                translation features, allowing users to listen to English words
                and their translations in several languages.
              </p>
            </div>

            <div className="about-section about-final">
              <p>
                Built with React, curiosity and a love for learning new words.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
