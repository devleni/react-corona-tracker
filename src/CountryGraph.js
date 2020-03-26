import React, { Component } from "react";
import CanvasJSReact from './canvasjs.react';
import "./CountryGraph.css";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


class CountryGraph extends Component {
  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
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
		const options = {
			animationEnabled: true,
			theme: "light2",			
			axisX: {
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
					{ label: "France", y: 20002, color: "crimson" },
					{ label: "Iran", y: 16715, color: "crimson" },
					{ label: "Germany", y: 35733, color: "crimson" },
					{ label: "Spain", y: 45084, color: "crimson" },
					{ label: "USA", y: 67309, color: "crimson" },
					{ label: "Italy", y: 57521, color: "crimson" },
					{ label: "China", y: 3947, color: "crimson" }
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