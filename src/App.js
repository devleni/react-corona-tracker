import React from 'react';
import './App.css';
import WorldStats from "./WorldStats";

function App() {
  return (
    <div className="App">
      <h1><img src="/virus.png" alt="" />CoronaTracker<img src="/virus.png" alt="" /></h1>
      <WorldStats />
    </div>
  );
}

export default App;