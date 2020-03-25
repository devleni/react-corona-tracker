import React, { Component } from "react";
import "./WorldStats.css";

class WorldStats extends Component {
  render() {
    return (
      <div className="WorldStatsContainer">
        <h1>World Statistics</h1>
          <div className="WorldDataContainer">
            <div className="WorldInfected">
              <h2>Infected</h2>
            </div>
            <div className="WorldRecovered">
              <h2>Recovered</h2>
            </div>
            <div className="WorldDeaths">
             <h2>Deaths</h2>
            </div>
          </div>
      </div>
    )
  }
}

export default WorldStats;
