import React from "react";
import Stars from "./components/Stars";

import "./App.css";
import "./main.css";

function App() {
  return (
    <div className="App">
      <div className="rating-list">
        <Stars count={1} />
        <Stars count={14} />
        <Stars count={3} />
        <Stars count={"film"} />
        <Stars count={5} />
      </div>
    </div>
  );
}

export default App;
