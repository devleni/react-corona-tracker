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
				yValueFormatString: "#",
				dataPoints: [
					{ label: "France", y: 3900 },
					{ label: "Iran", y: 10457  },
					{ label: "Germany", y: 3547 },
					{ label: "Spain", y: 7015 },
					{ label: "USA", y: 428 },
					{ label: "Italy", y: 9362 },
					{ label: "China", y: 74051 }
				]
			},
			{
				type: "stackedBar",
				name: "Deaths",
				showInLegend: "true",
				yValueFormatString: "#",
				dataPoints: [
					{ label: "France", y: 1331, color: "#333333" },
					{ label: "Iran", y: 2234, color: "#333333" },
					{ label: "Germany", y: 222, color: "#333333" },
					{ label: "Spain", y: 4089, color: "#333333" },
					{ label: "USA", y: 1036, color: "#333333" },
					{ label: "Italy", y: 7503, color: "#333333" },
					{ label: "China", y: 3287, color: "#333333" }
				]
			},			
			]
		}
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

export default CountryGraph;