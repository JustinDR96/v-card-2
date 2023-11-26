import React, { useEffect } from "react";
import Atropos from "atropos/react";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <div id="app">
      <Atropos className="my-atropos" activeOffset={40} shadowScale={0.5}>
        <div className="atropos-inner">
          <div className="atropos-content">
            <h1>De Roover Justin</h1>
          </div>
          <img src="/images/bg.jpg" data-atropos-offset="-5" />
        </div>
      </Atropos>
    </div>
  );
};

export default App;
