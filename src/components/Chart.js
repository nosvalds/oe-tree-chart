import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

const Chart = (/* { chartData, displayTitle, displayText} */) => {

    const chartData = {
        labels: [
            "2020-07-06",
            "2020-07-05",
            "2020-07-04",
            "2020-07-03",
            "2020-07-02",
            "2020-07-01"
        ].map((day) => new Date(day)),
        datasets: [
            {
              label: 'Trees Planted',
              data: [
                30,
                90,
                5,
                30,
                120,
                61
              ],
              backgroundColor: '#43C185',
            }
        ]
    }
    
    return (
        <div className="chart">
            <HorizontalBar
                data={ chartData }
                options={{
                    title: {
                        display: true,
                        text: "Trees planted per day",
                        fontSize: 30,
                        fontColor: '#000 '
                    },
                    legend: {
                        display: true, // legend
                        position: "top",
                        labels: {
                            fontColor: '#000',
                        }
                    },
                    scales: {
                        yAxes: [{
                            type: 'time',
                            time: {
                                unit: 'day',
                            }
                        }]
                    }
                }}
            />
        </div>
    )
    }

export default Chart;