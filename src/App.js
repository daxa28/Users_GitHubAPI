import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main.jsx";
import Card from "./components/card/Card.jsx";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/card/:username" element={<Card />} exact />
          <Route path="/*" element={<Error />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
