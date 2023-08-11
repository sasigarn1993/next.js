import React from 'react';
import { Chart as ChartJS, Line } from 'react-chartjs-2';
import pkg from 'chart.js';
const { Chart: Chart$1, LineController, BarController, RadarController, DoughnutController, PolarAreaController, BubbleController, PieController, ScatterController } = pkg;

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Cases',
        data: data.cases,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      // Add more datasets for deaths and recovered if needed
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <canvas id="line-chart" />;
};

export default LineChart;
