import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
