import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

import { Container, Grid } from '@mui/material';
import BarChart from './BarChart';

const CovidGraph = ({ data }) => {
  const dates = Object.keys(data.cases || {});
  const cases = Object.values(data.cases || {});
  
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Covid-19 Cases',
        data: cases,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };
  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [10, 25, 30, 15, 50],
  };
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  };

  // return <Line data={chartData} options={options} />;

  return (
    <Container>
      <h1>Chart.js Example</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BarChart data={data2} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CovidGraph;


