// src/components/SubmissionPage.tsx
import React, { useState } from 'react';

const SubmissionPage: React.FC = () => {
  const [assignmentDescription] = useState<string>('Write a short essay on React components.');
  const [teacherName] = useState<string>('Professor Smith');
  const [submission, setSubmission] = useState<string | null>(null);
  const [chatGptResponse, setChatGptResponse] = useState<string | null>(null);

  const handleSubmission = () => {
    // Send submission to backend (replace with actual API call)
    // Example: sendSubmissionToBackend(submission);

    // Simulate ChatGPT response (replace with actual API call)
    setChatGptResponse('Your essay is well-structured and provides a clear explanation of React components.');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Assignment</h1>
      <p>{assignmentDescription}</p>
      <p className="mt-4">Teacher: {teacherName}</p>

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
