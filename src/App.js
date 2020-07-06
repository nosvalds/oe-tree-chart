import React, { Component } from 'react';
import axios from './axios/axios';
import './App.css';

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
      this.setState({
        loaded: true,
        chartData: data,
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
          <ul>
            { chartData.filter((event, i) => i < 25).map((trees) => (
            <li>{ trees.value }, {trees.createdAt}</li>
          )) } 
          </ul>
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
