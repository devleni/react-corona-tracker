import React, { Component } from "react";
import "./WorldRecovered.css";

class WorldRecovered extends Component {
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
      <div className="WorldRecovered">
        <h2>Recovered</h2>
        <p>0</p>
      </div>
    )
  }
}

export default WorldRecovered;