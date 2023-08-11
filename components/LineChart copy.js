import { useEffect } from "react"
import { Chart } from "chart.js";
import { Container, Grid } from '@mui/material';


const LineChart = ({ data }) => {
  const dates = Object.keys(data.cases || {});
  const cases = Object.values(data.cases || {});

  console.log("data555:::"+dates[0]);
  const dates2 = '"'+dates.toString().replace(',', '","')+'"';
  useEffect(() => {
    if(dates!=null){
      console.log("innn");
      dates.forEach((doc) => {
          // console.log("x:::"+doc.data());
        // posts.push({ ...doc.data(), id: doc.id})
      });
  
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [dates2],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: [6, 3, 2, 2, 7, 0, 16],
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
  }, []);

  const handleDateRangeChange = async () => {
    console.log("pppp");
  };
  return (
    <>
      {/* line chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineChart;