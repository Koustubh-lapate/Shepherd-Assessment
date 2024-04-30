import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chart from 'chart.js/auto'; // Assuming Chart.js for charts

const Performance = () => {
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

  React.useEffect(() => {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {},
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Performance
        </Typography>
        <canvas id="performanceChart" width="400" height="200"></canvas>
      </CardContent>
    </Card>
  );
};

export default Performance;