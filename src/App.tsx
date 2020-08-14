import React from "react";
import { Route } from "react-router-dom";

import { Header, Navbar } from "components";
import { Goods, Home } from "pages";

function App() {
  return (
    <div className="main__wrapper">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/goods" render={() => <Goods />} />
    </div>
  );
}

export default App;
