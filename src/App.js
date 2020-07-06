import React, { Component } from 'react';
import axios from './axios/axios';
import './App.css';
import Chart from './components/Chart';
import { formatTreeData } from './data/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      chartData: []
    };
  }

  // called immediately after component mounts
  componentDidMount(){
    this.getChartData();
  }

  getChartData() {
    // GET request for trees data
    axios.get("").then(({ data }) => {
      // call out to helper function to get data into trees/day format
      let treeData = formatTreeData(data);

      // set state with format for Chart.js
      // set loaded = true since we have data to display the Chart component now
      this.setState({
        loaded: true,
        chartData: {
          labels: Object.keys(treeData).map((day) => new Date(day)), // array of dates 
          datasets: [
            {
              label: "Trees Planted",
              data: Object.values(treeData), // array of number of trees for each date
              backgroundColor: '#43C185',
            }
        ]}
      });
    });
  }
  
  render() {
    const { loaded, chartData } = this.state;

    // Chart.js chart configuration options
    const chartOptions = {
      maintainAspectRatio: false,
      title: {
          display: true,
          text: "Trees planted per day",
          fontSize: 30,
          fontColor: '#000'
      },
      scales: {
          yAxes: [{
              type: 'time',
              time: {
                  unit: 'day',
              }
          }]
      }
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Reforestation Efforts</h1>
        </header>
        {/* show loading message until we have the chart data in state */}
        { loaded ? 
          <Chart 
            chartData={ chartData } 
            chartOptions={ chartOptions }
            width={ 600 }
            height={ 5000 }
          />
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
