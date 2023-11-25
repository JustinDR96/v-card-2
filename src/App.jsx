import React, { useEffect } from "react";
import Atropos from "atropos/react";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <div id="app">
      <Atropos className="my-atropos" activeOffset={60} shadow={false}>
        <img src="/images/bg.jpg" />
      </Atropos>
    </div>
  );
};

export default App;
