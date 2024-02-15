import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'; // Assuming you have a Home component
import RegisterPage from './pages/Register'; // Assuming you have a Register component
import ChatAppPage from './pages/Chat';
import TeacherTempPage from './pages/TeacherTemplate';
import AdminAnalytics from './pages/AdminAnalytics';
import SubmissionPage from './pages/SubmissionPage';
import TeacherAnalytics from './pages/TeacherAnalytics';

const App: React.FC = () => {
  return (
    <Router basename="/stage_feedback_tool">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<ChatAppPage />} />
        <Route path="/teacher" element={<TeacherTempPage />} />
        <Route path="/admin" element={<AdminAnalytics />} />
        <Route path="/submission" element={<SubmissionPage />} />
        <Route path="/teacher-analytics" element={<TeacherAnalytics />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
