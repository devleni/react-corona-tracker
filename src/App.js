import React from 'react';
import WorldStats from "./WorldStats";
import CountryStats from "./CountryStats";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CoronaTracker</h1>
      <WorldStats />
      <CountryStats />
    </div>
  );
}

export default App;