import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto' 
function ChartComponent({ chartData, yAxesTicks }) {
  const options = {
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
          display: false, // Hide the vertical grid lines
        },
      },
      y: {
        ticks: {
          stepSize: 100,
          suggestedMin: 0,
          suggestedMax: 500,
          callback: (value) => (yAxesTicks.includes(value) ? value : ''),
        },
      },
    },
  };

  return (
    <div className="chart-content">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartComponent;