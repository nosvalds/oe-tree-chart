import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

const Chart = ({ chartData, chartOptions, width, height }) => {
    return (
        <div className="chart">
            <HorizontalBar
                data={ chartData }
                options={ chartOptions }
                width={ width }
                height={ height }
            />
        </div>
    )
}

export default Chart;