import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import Goods from "./pages/Goods";


function App() {
  return (
    <div className="main__wrapper">
      <Home />
      <Goods />
    </div>
  );
}

export default App;
