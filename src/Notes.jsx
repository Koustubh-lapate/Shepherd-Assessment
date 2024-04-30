import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PushpinIcon from '@mui/icons-material/Pushpin';

const Notes = () => {
  // Simulated pinned notes data (replace with actual data fetching)
  const notes = [
    {
      title: 'Important Physics Formulas',
      content: 'E=mc^2, F=ma, ...',
    },
    {
      title: 'Upcoming History Test',
      content: 'French Revolution key dates and figures',
    },
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Pinned Notes
        </Typography>
        <List dense={true}>
          {notes.map((note) => (
            <ListItem key={note.title}>
              <ListItemIcon>
                <PushpinIcon />
              </ListItemIcon>
              <ListItemText
                primary={note.title}
                secondary={note.content}
                sx={{ overflowWrap: 'ellipsis', textOverflow: 'clip' }} // Truncate long content
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Notes;
