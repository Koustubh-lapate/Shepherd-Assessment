import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          My Dashboard App
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          Welcome, User
        </Typography>
        <Typography variant="body2" color="inherit" sx={{ ml: 2, display: { xs: 'none', sm: 'flex' } }}>
          {new Date().toLocaleDateString()}
        </Typography>
        <Avatar sx={{ ml: 'auto' }}>U</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
