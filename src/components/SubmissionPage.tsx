// src/components/SubmissionPage.tsx

import React, { useState } from 'react';
import FeedbackBox from './FeedbackBox'; // Import FeedbackBox component

const SubmissionPage: React.FC = () => {
  const [teacherNames] = useState<string[]>(['Professor Smith', 'Professor Johnson', 'Professor Lee']);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [submission, setSubmission] = useState<string | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);
  const [chatGptResponse, setChatGptResponse] = useState<string | null>(null);

  const handleTeacherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeacher(event.target.value);
  };

  const handleAssignmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAssignment(event.target.value);
  };

  const handleSubmission = () => {
    // Handle submission logic here
    setChatGptResponse('Your essay is well-structured and provides a clear explanation of React components.');
  };

  const assignmentsWithTeachers = [
    { name: 'Assignment 1', teacherId: 1 },
    { name: 'Assignment 2', teacherId: 2 },
    // ... other assignments ...
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Assignment</h1>
      <p className="mt-4">Teacher:
        <select
          className="w-full p-2 mt-2 text-gray-800 bg-gray-100 rounded-md"
          value={selectedTeacher || ''}
          onChange={handleTeacherChange}
        >
          <option value="" disabled>Select a teacher</option>
          {teacherNames.map((teacher, index) => (
            <option key={index} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
      </p>

      {/* Dropdown for assignments */}
      <select
        className="w-full p-2 mt-4 text-gray-800 bg-gray-100 rounded-md"
        value={selectedAssignment || ''}
        onChange={handleAssignmentChange}
      >
        <option value="" disabled>Select an assignment</option>
        {assignmentsWithTeachers.map((assignment, index) => (
          <option key={index} value={assignment.name}>
            {assignment.name}
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
      {/* Pass chatGptResponse as a prop to FeedbackBox */}
      <div style={{ marginTop: "1%", marginRight: "50%" }}>
        <FeedbackBox chatGptResponse={chatGptResponse} />
      </div>

    </div>
  );
};

export default SubmissionPage;
