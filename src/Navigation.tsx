// src/Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {/* Add more navigation links here if needed */}
        <li><a href="/">Student Submission</a></li>
        <li><a href="/">Student Final Submission</a></li>
        <li><a href="/">Student Analytics</a></li>
        <li><a href="/">Teacher Analytics</a></li>
        <li><a href="/">Admin Analytisc</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
