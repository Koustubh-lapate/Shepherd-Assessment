import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

const WeeklySummary = () => {
  const progressValue = 70; // Simulated progress

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" component="div">
              Weekly Summary
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div">
              Cards studied: 50
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div">
              Time studied: 2 hours
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div">
              Latest quiz score: 85%
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={progressValue} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeeklySummary;