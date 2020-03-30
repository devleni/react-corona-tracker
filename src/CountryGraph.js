import React, { Component } from "react";
import CanvasJSReact from './canvasjs.react';
import "./CountryGraph.css";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


class CountryGraph extends Component {
  constructor(props) {
		super(props);
		this.state = {
      error: null,
      isLoaded: false,
      result: []
    }; 
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

	componentDidMount() {
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ENTER API KEY HERE"
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
	
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {		
		const { error, isLoaded, result } = this.state;
		const countryName1 = result.map(r => r.countries_stat[0].country_name);
		const countryName2 = result.map(r => r.countries_stat[1].country_name);
		const countryName3 = result.map(r => r.countries_stat[2].country_name);
		const countryName4 = result.map(r => r.countries_stat[3].country_name);
		const countryName5 = result.map(r => r.countries_stat[4].country_name);
		const countryName6 = result.map(r => r.countries_stat[5].country_name);
		const countryName7 = result.map(r => r.countries_stat[6].country_name);
		const countryName8 = result.map(r => r.countries_stat[7].country_name);
		const countryName9 = result.map(r => r.countries_stat[8].country_name);
		const countryName10 = result.map(r => r.countries_stat[9].country_name);
		const countryName11 = result.map(r => r.countries_stat[10].country_name);
		const countryName12 = result.map(r => r.countries_stat[11].country_name);
		const countryName13 = result.map(r => r.countries_stat[12].country_name);
		const countryName14 = result.map(r => r.countries_stat[13].country_name);
		const countryName15 = result.map(r => r.countries_stat[14].country_name);
		const activeCases1 = parseInt(result.map(r => r.countries_stat[0].active_cases).toString().split(",").join(""));
		const activeCases2 = parseInt(result.map(r => r.countries_stat[1].active_cases).toString().split(",").join(""));
		const activeCases3 = parseInt(result.map(r => r.countries_stat[2].active_cases).toString().split(",").join(""));
		const activeCases4 = parseInt(result.map(r => r.countries_stat[3].active_cases).toString().split(",").join(""));
		const activeCases5 = parseInt(result.map(r => r.countries_stat[4].active_cases).toString().split(",").join(""));
		const activeCases6 = parseInt(result.map(r => r.countries_stat[5].active_cases).toString().split(",").join(""));
		const activeCases7 = parseInt(result.map(r => r.countries_stat[6].active_cases).toString().split(",").join(""));
		const activeCases8 = parseInt(result.map(r => r.countries_stat[7].active_cases).toString().split(",").join(""));
		const activeCases9 = parseInt(result.map(r => r.countries_stat[8].active_cases).toString().split(",").join(""));
		const activeCases10 = parseInt(result.map(r => r.countries_stat[9].active_cases).toString().split(",").join(""));
		const activeCases11 = parseInt(result.map(r => r.countries_stat[10].active_cases).toString().split(",").join(""));
		const activeCases12 = parseInt(result.map(r => r.countries_stat[11].active_cases).toString().split(",").join(""));
		const activeCases13 = parseInt(result.map(r => r.countries_stat[12].active_cases).toString().split(",").join(""));
		const activeCases14 = parseInt(result.map(r => r.countries_stat[13].active_cases).toString().split(",").join(""));
		const activeCases15 = parseInt(result.map(r => r.countries_stat[14].active_cases).toString().split(",").join(""));
		const totalRecovered1 = parseInt(result.map(r => r.countries_stat[0].total_recovered).toString().split(",").join(""));
		const totalRecovered2 = parseInt(result.map(r => r.countries_stat[1].total_recovered).toString().split(",").join(""));
		const totalRecovered3 = parseInt(result.map(r => r.countries_stat[2].total_recovered).toString().split(",").join(""));
		const totalRecovered4 = parseInt(result.map(r => r.countries_stat[3].total_recovered).toString().split(",").join(""));
		const totalRecovered5 = parseInt(result.map(r => r.countries_stat[4].total_recovered).toString().split(",").join(""));
		const totalRecovered6 = parseInt(result.map(r => r.countries_stat[5].total_recovered).toString().split(",").join(""));
		const totalRecovered7 = parseInt(result.map(r => r.countries_stat[6].total_recovered).toString().split(",").join(""));
		const totalRecovered8 = parseInt(result.map(r => r.countries_stat[7].total_recovered).toString().split(",").join(""));
		const totalRecovered9 = parseInt(result.map(r => r.countries_stat[8].total_recovered).toString().split(",").join(""));
		const totalRecovered10 = parseInt(result.map(r => r.countries_stat[9].total_recovered).toString().split(",").join(""));
		const totalRecovered11 = parseInt(result.map(r => r.countries_stat[10].total_recovered).toString().split(",").join(""));
		const totalRecovered12 = parseInt(result.map(r => r.countries_stat[11].total_recovered).toString().split(",").join(""));
		const totalRecovered13 = parseInt(result.map(r => r.countries_stat[12].total_recovered).toString().split(",").join(""));
		const totalRecovered14 = parseInt(result.map(r => r.countries_stat[13].total_recovered).toString().split(",").join(""));
		const totalRecovered15 = parseInt(result.map(r => r.countries_stat[14].total_recovered).toString().split(",").join(""));
		const totalDeaths1 = parseInt(result.map(r => r.countries_stat[0].deaths).toString().split(",").join(""));
		const totalDeaths2 = parseInt(result.map(r => r.countries_stat[1].deaths).toString().split(",").join(""));
		const totalDeaths3 = parseInt(result.map(r => r.countries_stat[2].deaths).toString().split(",").join(""));
		const totalDeaths4 = parseInt(result.map(r => r.countries_stat[3].deaths).toString().split(",").join(""));
		const totalDeaths5 = parseInt(result.map(r => r.countries_stat[4].deaths).toString().split(",").join(""));
		const totalDeaths6 = parseInt(result.map(r => r.countries_stat[5].deaths).toString().split(",").join(""));
		const totalDeaths7 = parseInt(result.map(r => r.countries_stat[6].deaths).toString().split(",").join(""));
		const totalDeaths8 = parseInt(result.map(r => r.countries_stat[7].deaths).toString().split(",").join(""));
		const totalDeaths9 = parseInt(result.map(r => r.countries_stat[8].deaths).toString().split(",").join(""));
		const totalDeaths10 = parseInt(result.map(r => r.countries_stat[9].deaths).toString().split(",").join(""));
		const totalDeaths11 = parseInt(result.map(r => r.countries_stat[10].deaths).toString().split(",").join(""));
		const totalDeaths12 = parseInt(result.map(r => r.countries_stat[11].deaths).toString().split(",").join(""));
		const totalDeaths13 = parseInt(result.map(r => r.countries_stat[12].deaths).toString().split(",").join(""));
		const totalDeaths14 = parseInt(result.map(r => r.countries_stat[13].deaths).toString().split(",").join(""));
		const totalDeaths15 = parseInt(result.map(r => r.countries_stat[14].deaths).toString().split(",").join(""));
		
		const options = {						
			animationEnabled: true,
			theme: "light2",			
			axisX: {
				interval: 1,
				valueFormatString: "string"
			},
			axisY: {
				prefix: ""
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "stackedBar",
				name: "Active Cases",
				showInLegend: "true",
				legendMarkerColor: "crimson",
				yValueFormatString: "#",
				dataPoints: [
					{ label: countryName15, y: activeCases15, color: "crimson" },
					{ label: countryName14, y: activeCases14, color: "crimson" },
					{ label: countryName13, y: activeCases13, color: "crimson" },
					{ label: countryName12, y: activeCases12, color: "crimson" },
					{ label: countryName11, y: activeCases11, color: "crimson" },
					{ label: countryName10, y: activeCases10, color: "crimson" },
					{ label: countryName9, y: activeCases9, color: "crimson" },
					{ label: countryName8, y: activeCases8, color: "crimson" },
					{ label: countryName7, y: activeCases7, color: "crimson" },
					{ label: countryName6, y: activeCases6, color: "crimson" },
					{ label: countryName5, y: activeCases5, color: "crimson" },
					{ label: countryName4, y: activeCases4, color: "crimson" },
					{ label: countryName3, y: activeCases3, color: "crimson" },
					{ label: countryName2, y: activeCases2, color: "crimson" },
					{ label: countryName1, y: activeCases1, color: "crimson" }
				]
			},
			{
				type: "stackedBar",
				name: "Recovered",
				showInLegend: "true",
				legendMarkerColor: "lightgreen",
				yValueFormatString: "#",
				dataPoints: [
					{ label: countryName15, y: totalRecovered15, color: "lightgreen" },
					{ label: countryName14, y: totalRecovered14, color: "lightgreen" },
					{ label: countryName13, y: totalRecovered13, color: "lightgreen" },
					{ label: countryName12, y: totalRecovered12, color: "lightgreen" },
					{ label: countryName11, y: totalRecovered11, color: "lightgreen" },
					{ label: countryName10, y: totalRecovered10, color: "lightgreen" },
					{ label: countryName9, y: totalRecovered9, color: "lightgreen" },
					{ label: countryName8, y: totalRecovered8, color: "lightgreen" },
					{ label: countryName7, y: totalRecovered7, color: "lightgreen" },
					{ label: countryName6, y: totalRecovered6, color: "lightgreen" },
					{ label: countryName5, y: totalRecovered5, color: "lightgreen" },
					{ label: countryName4, y: totalRecovered4, color: "lightgreen" },
					{ label: countryName3, y: totalRecovered3, color: "lightgreen" },
					{ label: countryName2, y: totalRecovered2, color: "lightgreen" },
					{ label: countryName1, y: totalRecovered1, color: "lightgreen" }
				]
			},
			{
				type: "stackedBar",
				name: "Deaths",
				showInLegend: "true",
				legendMarkerColor: "#333333",
				yValueFormatString: "#",
				dataPoints: [
					{ label: countryName15, y: totalDeaths15, color: "#333333" },
					{ label: countryName14, y: totalDeaths14, color: "#333333" },
					{ label: countryName13, y: totalDeaths13, color: "#333333" },
					{ label: countryName12, y: totalDeaths12, color: "#333333" },
					{ label: countryName11, y: totalDeaths11, color: "#333333" },
					{ label: countryName10, y: totalDeaths10, color: "#333333" },
					{ label: countryName9, y: totalDeaths9, color: "#333333" },
					{ label: countryName8, y: totalDeaths8, color: "#333333" },
					{ label: countryName7, y: totalDeaths7, color: "#333333" },
					{ label: countryName6, y: totalDeaths6, color: "#333333" },
					{ label: countryName5, y: totalDeaths5, color: "#333333" },
					{ label: countryName4, y: totalDeaths4, color: "#333333" },
					{ label: countryName3, y: totalDeaths3, color: "#333333" },
					{ label: countryName2, y: totalDeaths2, color: "#333333" },
					{ label: countryName1, y: totalDeaths1, color: "#333333" }
				]
			},			
			]			
		}
		if (error) {
			return <div>Errir: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {			
			return (
				<div className="CountryDataContainer">
					<CanvasJSChart options = {options}
						onRef={ref => this.chart = ref}
					/>
					{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
				</div>
				);
		}
	}
}

export default CountryGraph;