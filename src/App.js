import React, { Component } from 'react';
import axios from './axios/axios';
import './App.css';
import Chart from './components/Chart';
import { formatTreeData } from './data/api';
import DateFilter from './components/DateFilter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      treeData: {},
      chartData: [],
      startDate: "",
      endDate: "",
    };

    this.handleFilter = this.handleFilter.bind(this);
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

      let days = Object.keys(treeData).map((day) => new Date(day)) // array of dates 

      this.setState({
        loaded: true,
        treeData,
        startDate: days[days.length - 1], 
        endDate: days[0],
        chartData: {
          labels: days, 
          
          datasets: [
            {
              label: "Trees Planted",
              data: Object.values(treeData), // array of number of trees for each date
              backgroundColor: '#43C185',
            }
        ]},
        
      });
    });
  }

  handleFilter(startDate, endDate) {
    let treeData = {...this.state.treeData};
    let filteredDates = Object.keys(treeData).map((day) => new Date(day)).filter((date) => (startDate <= date && endDate >= date ));
    this.setState({
      chartData: {
        labels: filteredDates,
        datasets: [
          {
            label: "Trees Planted",
            data: filteredDates.map((date) => {
              let dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
              return treeData[dateStr];
            }),
            backgroundColor: '#43C185',
          }
        ]
      }
    });
  }
  
  render() {
    const { loaded, chartData, startDate, endDate } = this.state;

    // Chart.js chart configuration options
    const chartOptions = {
      // maintainAspectRatio: true,
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
          <>
            <DateFilter 
              initStartDate={ startDate }
              initEndDate={ endDate }
              onApply={(startDate, endDate) => this.handleFilter(startDate, endDate)}
            />
            <Chart 
              chartData={ chartData } 
              chartOptions={ chartOptions }
            />
          </>
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
