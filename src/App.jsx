import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dictionary from "./pages/Dictionary";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dictionary />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
