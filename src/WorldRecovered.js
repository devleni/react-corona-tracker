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
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "8ef55b2526mshfdc06b3fd66166dp16780ejsn5c0635d72882"
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            result: this.state.result.concat(result)
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
        {isLoaded ? <p>{result.map(r => r.total_recovered)}</p> : <p><img src="loading.gif" alt="" /></p>}
        <h3>Recovered</h3>
        </div>
    )
  }
}

export default WorldRecovered;