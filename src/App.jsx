import React, { useState } from 'react';
import Navigation from './Navigation';
import WeeklySummary from './WeeklySummary';
import Performance from './Performance';
import Notes from './Notes';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import WeatherIcon from './WeatherIcon'; // Import WeatherIcon component

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home'); // Track active navigation item

  const handleNavigationClick = (text) => {
    setActiveNavItem(text);
    // Simulate navigation (replace with actual routing if needed)
    console.log(`Navigating to: ${text}`);
  };

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <Navigation items={navigationItems} onNavigationClick={handleNavigationClick} activeNavItem={activeNavItem} />
        <main style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <div style={{ marginRight: 20 }}>
            <div style={{ marginTop: 10 }}>
              <Typography variant="h6" gutterBottom>
                Hi Liam, Welcome Back!
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <WeatherIcon weather="cloudy" />
                <Typography variant="body2" color="textSecondary" style={{ marginLeft: 5 }}>
                  {new Date().toLocaleDateString('en-US', { weekday: 'long' })}, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                </Typography>
              </div>
            </div>
            <WeeklySummary />
          </div>
          <div style={{ flex: 1 }}>
            <Performance />
            <Notes />
          </div>
        </main>
      </div>
    </div>
  );
};

const navigationItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Find a Tutor', icon: <SearchIcon /> },
  { text: 'Messages', icon: <ChatIcon /> },
  // ... (Add other navigation items)
];

export default App;
