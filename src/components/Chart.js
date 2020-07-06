import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

const Chart = ({ chartData }) => {
    return (
        <div className="chart">
            <HorizontalBar
                data={ chartData }
                width={ 600 }
                height={ 5000 }
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Trees planted per day",
                        fontSize: 30,
                        fontColor: '#000'
                    },
                    legend: {
                        display: false, // legend
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