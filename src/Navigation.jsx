import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
// ... (Add icons for other navigation items)

const Navigation = ({ items, onNavigationClick, activeNavItem }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem
          button
          key={item.text}
          selected={activeNavItem === item.text}
          onClick={() => onNavigationClick(item.text)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;