import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <ul className="flex space-x-4 justify-center">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/" className="hover:underline">Student Submission</a></li>
        <li><a href="/" className="hover:underline">Student Final Submission</a></li>
        <li><a href="/" className="hover:underline">Student Analytics</a></li>
        <li><a href="/" className="hover:underline">Teacher Analytics</a></li>
        <li><a href="/" className="hover:underline">Admin Analytics</a></li>
        <li><a href="/" className="hover:underline">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
