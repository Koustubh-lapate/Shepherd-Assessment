import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Ask = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Ask Shepherd
        </Typography>
        <Typography variant="body2" component="div">
          Need help with a challenge? Get matched with a tutor who can guide you.
        </Typography>
        <Button variant="contained" size="small" color="primary">
          Find a Tutor
        </Button>
      </CardContent>
    </Card>
  );
};

export default Ask;
