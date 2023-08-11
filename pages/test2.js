import React, { useState, useEffect } from 'react';
import LineChart from '../src/components/LineChart';
import DataTableComponent from '../src/components/DataTable';

const Home = () => {
  const [numDays, setNumDays] = useState(7); // Default value

  const handleNumDaysChange = (event) => {
    setNumDays(event.target.value);
  };

  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=${numDays}`)
      .then(response => response.json())
      .then(data => {
        const dateArray = Object.keys(data.cases);
        const formattedData = dateArray.map(date => ({
          date,
          cases: data.cases[date],
          deaths: data.deaths[date],
          recovered: data.recovered[date],
        }));
        setHistoricalData(formattedData);
      });
  }, [numDays]);

  const lineChartData = {
    labels: historicalData.map(entry => entry.date),
    datasets: [
      {
        label: 'Cases',
        data: historicalData.map(entry => entry.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      // Add more datasets for deaths and recovered if needed
    ],
  };

  return (
    <div>
      <h1>COVID-19 Dashboard</h1>
      <div>
        <label>
          Number of Days: 
          <input type="number" value={numDays} onChange={handleNumDaysChange} />
        </label>
      </div>
      {/* <LineChart data={lineChartData} /> */}
      <DataTableComponent data={historicalData} />
    </div>
  );
};

export default Home;
