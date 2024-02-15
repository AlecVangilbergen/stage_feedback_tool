// src/components/FeedbackBox.tsx
import React, { useState, useEffect } from "react";

const FeedbackBox: React.FC = () => {
  const [backendResult, setBackendResult] = useState<string | null>(null);

  // Simulating backend communication (replace with actual API call)
  const fetchBackendResult = async () => {
    try {
      // Replace with your actual backend API call
      const response = await fetch("https://api.example.com/your-endpoint");
      const data = await response.json();
      setBackendResult(data.result); // Assuming the response has a "result" field
    } catch (error) {
      console.error("Error fetching backend result:", error);
    }
  };

  // Fetch backend result when component mounts (you can trigger this based on your logic)
  useEffect(() => {
    fetchBackendResult();
  }, []);

  return (
    <div style={{marginLeft: '1%', marginRight: '50%'}} className="flex flex-col items-center p-4 bg-gray-200 rounded-lg">
      <textarea
        className="w-full p-2 mb-2 text-gray-800 bg-gray-100 rounded-md resize-none"
        placeholder="Backend result will appear here"
        value={backendResult || ""}
        readOnly // Make the textarea non-editable
      />
      <div className="flex justify-between w-full">
        <button className="flex items-center space-x-1 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm4-7a1 1 0 00-1.707-.707L10 8.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Thumbs Up</span>
        </button>
        <button className="flex items-center space-x-1 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm4-7a1 1 0 00-1.707-.707L10 8.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Thumbs Down</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackBox;
