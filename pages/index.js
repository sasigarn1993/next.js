import React, { useState, useEffect } from 'react';
import DateRangePicker from '../components/DateRangePicker';
import LineChart from '../components/LineChart';

import { Container, Grid } from '@mui/material';
import DataTableComponent from '../components/DataTableComponent';
import axios from 'axios';
import 'chart.js'; 
import DataTableComponent2 from '../src/components/DataTable';
// import LineChart2 from '../src/components/LineChart';
import LineChart2 from '../components/LineChart';
// import { Chart, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, Line } from 'react-chartjs-2';

import pkg from 'chart.js';
const { Chart: Chart$1, LineController, BarController, RadarController, DoughnutController, PolarAreaController, BubbleController, PieController, ScatterController } = pkg;


const HomePage = () => {
  const [data, setData] = useState({});
  // const handleDateRangeChange = async (startDate, endDate) => {
  //   try {
  //     const response = await axios.get(
  //       `https://disease.sh/v3/covid-19/historical/all?start=${startDate.format('YYYY-MM-DD')}&end=${endDate.format('YYYY-MM-DD')}`
  //     );

  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };



  // 

  const [numDays, setNumDays] = useState(7); // Default value

  const handleNumDaysChange = (event) => {
    setNumDays(event.target.value);
  };

  const [historicalData, setHistoricalData] = useState([]);

    // 
    const lineChartData = {
      labels: historicalData.map(entry => entry.date),
      cases: historicalData.map(entry => entry.cases),
      deaths: historicalData.map(entry => entry.deaths),
      recovered: historicalData.map(entry => entry.recovered),
    };


    // const chartOptions = {
    //   responsive: true,
    //   maintainAspectRatio: false,
    // };
  
  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=${numDays}`)
      .then(response => {
        const { data } = response;
        const dateArray = Object.keys(data.cases);
        const formattedData = dateArray.map(date => ({
          date,
          cases: data.cases[date],
          deaths: data.deaths[date],
          recovered: data.recovered[date],
        }));
        setHistoricalData(formattedData);
        setData(data);
      })
      .catch(error => console.error(error));

    // fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=${numDays}`)
    //   .then(response => response.json())
    //   .then(data => {
        
    //     const dateArray = Object.keys(data.cases);
    //     const formattedData = dateArray.map(date => ({
    //       date,
    //       cases: data.cases[date],
    //       deaths: data.deaths[date],
    //       recovered: data.recovered[date],
    //     }));
    //     setHistoricalData(formattedData);
    //     setData(data);
    //   });

  }, [numDays]);

  return (
    <div align="center" style={{ padding: "20px" }}>
      <h1>ข้อมูล Covid-19</h1>
      <br></br>
      <div>
        <label>
          จำนวนวัน : &nbsp;
           <input type="number" value={numDays} onChange={handleNumDaysChange} />
        </label>
      </div>
    <br></br><br/>
      {/* <LineChart2 data={historicalData} /> */}
     
   
      {/* <DateRangePicker onDateRangeChange={handleDateRangeChange} /> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineChart data={data} />
        </Grid>
        <Grid item xs={12}>
          <DataTableComponent2 data={historicalData} />
        </Grid>
      </Grid>
      
    </div>
  );
};

export default HomePage;
