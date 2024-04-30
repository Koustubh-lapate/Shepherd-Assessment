import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import WeeklySummary from './WeeklySummary';
import Ask from './Ask';
import Performance from './Performance';
import Notes from './Notes';

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home'); // Track active navigation item

  const handleNavigationClick = (text) => {
    setActiveNavItem(text);
    // Simulate navigation (replace with actual routing if needed)
    console.log(`Navigating to: ${text}`);
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Navigation items={navigationItems} onNavigationClick={handleNavigationClick} activeNavItem={activeNavItem} />
        <main style={{ flex: 1, padding: 20 }}>
          {/* Content area for other sections */}
          <WeeklySummary />
          <Ask />
          <Performance />
          <Notes />
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