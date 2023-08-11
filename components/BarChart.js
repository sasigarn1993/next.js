// src/components/BarChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js'; // ใช้เป็น 'chart.js/auto'

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // ประกาศตัวแปร chartInstance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
  
    if (chartInstance.current) {
      chartInstance.current.destroy(); // ทำลาย Chart เดิม (ถ้ามี)
    }
  
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Data Values',
            data: data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }, [data]);
  

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;



