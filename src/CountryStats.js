import React, { Component } from "react";
import CountryGraph from "./CountryGraph";
import "./CountryStats.css";

class CountryStats extends Component {
  render() {
    return (
      <div className="CountryStatsContainer">
      <h2>By Country</h2>
        <div className="">        
          <CountryGraph />
        </div>
      </div>
    )
  }
}

export default CountryStats;