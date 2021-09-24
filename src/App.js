import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Personagens from "./Components/Personagens";
import Filmes from "./Components/Filmes";
import HQs from "./Components/HQs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/hqs" element={<HQs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
