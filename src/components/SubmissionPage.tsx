// src/components/SubmissionPage.tsx

import React, { useState } from 'react';

const SubmissionPage: React.FC = () => {
  //const [assignmentDescription] = useState<string>('Write a short essay on React components.');
  const [teacherName] = useState<string>('Professor Smith');
  const [submission, setSubmission] = useState<string | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);
  const [chatGptResponse, setChatGptResponse] = useState<string | null>(null);

  const handleAssignmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAssignment(event.target.value);
  };

  const handleSubmission = () => {
    // Handle submission logic here
    setChatGptResponse('Your essay is well-structured and provides a clear explanation of React components.');
  };

  const assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3']; // Replace with actual assignment names

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Assignment</h1>
      <p className="mt-4">Teacher: {teacherName}</p>

      {/* Dropdown for assignments */}
      <select
        className="w-full p-2 mt-4 text-gray-800 bg-gray-100 rounded-md"
        value={selectedAssignment || ''}
        onChange={handleAssignmentChange}
      >
        <option value="" disabled>Select an assignment</option>
        {assignments.map((assignment, index) => (
          <option key={index} value={assignment}>
            {assignment}
          </option>
        ))}
      </select>

      {/* Other components (textarea, file input, etc.) */}
      <textarea
        className="w-full p-2 mt-4 text-gray-800 bg-gray-100 rounded-md resize-none"
        placeholder="Type your answer here..."
        value={submission || ''}
        onChange={(e) => setSubmission(e.target.value)}
      />

      <input
        type="file"
        className="mt-4"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            // Handle file upload (e.g., save to state)
            console.log('File uploaded:', file.name);
          }
        }}
      />

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleSubmission}
      >
        Get Feedback
      </button>

      {chatGptResponse && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">ChatGPT Feedback</h2>
          <p>{chatGptResponse}</p>
        </div>
      )}
    </div>
  );
};

export default SubmissionPage;
