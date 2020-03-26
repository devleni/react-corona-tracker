import React, { Component } from "react";
import WorldConfirmed from "./WorldConfirmed";
import WorldRecovered from "./WorldRecovered";
import WorldDeaths from "./WorldDeaths";
import "./WorldStats.css";

class WorldStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }; 
  }

  componentDidMount() {
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "8ef55b2526mshfdc06b3fd66166dp16780ejsn5c0635d72882"
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

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
