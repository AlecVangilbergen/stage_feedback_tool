// src/components/AdminAnalyticsDashboard.tsx
import React, { useState } from 'react';

const AdminAnalyticsDashboard: React.FC = () => {
  const [templates] = useState<string[]>([
    'Template 1: React Components',
    'Template 2: State Management',
    // Add more templates as needed
  ]);

  const [submissions, setSubmissions] = useState<string[]>([]);
  const [chatGptFeedback, setChatGptFeedback] = useState<string[]>([]);
  const [teacherRatings, setTeacherRatings] = useState<'like' | 'dislike'[]>([]);

  const handleGetFeedback = () => {
    // Simulate fetching ChatGPT feedback and teacher ratings (replace with actual API call)
    const feedback = [
      'Excellent work!',
      'Needs improvement.',
      // Add more feedback as needed
    ];
    setChatGptFeedback(feedback);

    const ratings = ['like', 'dislike']; // Simulated teacher ratings
    setTeacherRatings(ratings as any);

    // Simulate fetching student submissions (replace with actual API call)
    const studentSubmissions = [
        'Student A: Lorem ipsum dolor sit amet...',
        'Student B: Consectetur adipiscing elit...',
        // Add more submissions as needed
    ];
    setSubmissions(studentSubmissions);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Analytics Dashboard</h1>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleGetFeedback}
      >
        Get Feedback
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Student Submissions</h2>
        <ul>
          {submissions.map((submission, index) => (
            <li key={index}>
              <p>{templates[index]}</p>
              <p>{submission}</p>
              <p className="text-gray-600 mt-2">{chatGptFeedback[index]}</p>
              <p className="text-gray-600 mt-2">Teacher Rating: {teacherRatings[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminAnalyticsDashboard;
