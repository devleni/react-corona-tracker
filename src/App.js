import React from 'react';
import './App.css';
import WorldStats from "./WorldStats";

function App() {
  return (
    <div className="App">
      <h1><img src="/virus.png" alt="" />CoronaTracker</h1>
      <WorldStats />
    </div>
  );
}

export default App;