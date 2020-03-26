import React, { Component } from "react";
import WorldConfirmed from "./WorldConfirmed";
import WorldRecovered from "./WorldRecovered";
import WorldDeaths from "./WorldDeaths";
import "./WorldStats.css";

class WorldStats extends Component {
  render() {
    return (
      <div className="WorldStatsContainer">
        <h2>WORLDWIDE</h2>
        <div className="WorldDataContainer">
          <WorldConfirmed />
          <WorldRecovered />
          <WorldDeaths />
        </div>
      </div>
    )
  }
}

export default WorldStats;
