// src/components/TeacherAnalyticsPage.tsx
import React, { useState } from 'react';

const TeacherAnalyticsPage: React.FC = () => {
  const [assignments] = useState<string[]>([
    'Assignment 1: React Components',
    'Assignment 2: State Management',
    // Add more assignments as needed
  ]);

  const [submissions, setSubmissions] = useState<string[]>([]);
  const [chatGptFeedback, setChatGptFeedback] = useState<string[]>([]);

  const handleGetFeedback = () => {
    // Simulate fetching ChatGPT feedback (replace with actual API call)
    const feedback = [
      'Excellent work!',
      'Needs improvement.',
      // Add more feedback as needed
    ];
    setChatGptFeedback(feedback);

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
      <h1 className="text-2xl font-semibold mb-4">Teacher Analytics</h1>

      <select className="w-full p-2 mb-4 text-gray-800 bg-gray-100 rounded-md">
        {assignments.map((assignment, index) => (
          <option key={index} value={assignment}>
            {assignment}
          </option>
        ))}
      </select>

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
              {submission}
              <p className="text-gray-600 mt-2">{chatGptFeedback[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherAnalyticsPage;
