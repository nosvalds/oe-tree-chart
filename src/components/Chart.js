import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

const Chart = ({ chartData, chartOptions }) => {
    return (
        <div className="chart">
            <HorizontalBar
                data={ chartData }
                options={ chartOptions }
            />
        </div>
    )
}

export default Chart;