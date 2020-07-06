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

  componentDidMount(){
    this.getChartData();
  }

  getChartData() {
    axios.get("").then(({ data }) => {
      let treeData = formatTreeData(data);

      this.setState({
        loaded: true,
        chartData: {
          labels: Object.keys(treeData).map((day) => new Date(day)),
          datasets: [
            {
              label: "Trees Planted",
              data: Object.values(treeData),
              backgroundColor: '#43C185'
            }
        ]}
      });
    });
  }
  
  render() {
    const { loaded, chartData } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tree Tracker</h1>
        </header>
        { loaded ? 
          <>
            {/* <ul>
              { Object.keys(chartData).map((date, value) => (
              <li key={ date }>{ date }: { value }</li>
            )) } 
            </ul> */}
            <Chart chartData={ chartData } />
          </>
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
