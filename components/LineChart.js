import { useEffect } from "react";
import { Chart } from "chart.js";

const LineChart = ({ data }) => {
  const dates = Object.keys(data.cases || {});
  const cases = Object.values(data.cases || {});
  const deaths = Object.values(data.deaths || {}); 
  const recovered = Object.values(data.recovered || {});

  console.log("dates::"+dates[0]);
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          data: cases,
          label: "Cases",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: deaths,
          label: "Deaths",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: recovered,
          label: "Recovered",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }]
      },
    });
  }, [dates, cases, deaths, recovered]);

  return (
    <>
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">กราฟเส้น</h1>
      <br/>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineChart;
