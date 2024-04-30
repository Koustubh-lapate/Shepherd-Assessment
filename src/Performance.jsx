import React, { useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chart from 'chart.js/auto';

const Performance = () => {
  const chartRef = useRef(null); // Ref to hold the chart instance

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {},
      });
    }

    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Run only once on component mount

  // Simulated chart data (replace with actual data fetching)
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Flashcards Studied',
        data: [20, 30, 45, 25, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Performance
        </Typography>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </CardContent>
    </Card>
  );
};

export default Performance;