import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'; // Assuming you have a Home component
import RegisterPage from './pages/Register'; // Assuming you have a Register component

const App: React.FC = () => {
  return (
    <Router basename="/stage_feedback_tool">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
