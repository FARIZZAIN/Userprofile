import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import global styles if needed
import ProfileView from './components/ProfileView';
import Eventview from './components/Eventview';


const App = () => {
  return (
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/events" element={<Eventview />} />
            <Route path="/" element={<ProfileView />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
  );
};

export default App;
