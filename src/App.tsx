import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./css-reset.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/linux" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
