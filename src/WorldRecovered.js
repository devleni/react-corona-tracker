import React, { Component } from "react";
import "./WorldRecovered.css";

class WorldRecovered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: []
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
            result: result
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
    const { error, isLoaded, result } = this.state;
    return (
      <div className="WorldRecovered">
        <img src="/heart.png" alt="" />
        { error ? <p>{error.message}</p> : null}
        {isLoaded ? <p>{result.map(r => r.recovered)}</p> : <p><img src="loading.gif" alt="" /></p>}
        <h3>Recovered</h3>
        </div>
    )
  }
}

export default WorldRecovered;