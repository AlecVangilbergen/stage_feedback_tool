// src/components/AdminAnalyticsDashboard.tsx
import React, { useState, useEffect } from "react";

const AdminAnalytics: React.FC = () => {
  const [assignmentDescription] = useState<string>(
    "Sample assignment description"
  );
  const [apiResults, setApiResults] = useState<string | null>(null);
  const [userRating, setUserRating] = useState<"like" | "dislike" | null>(null);

  // Simulate fetching API results (replace with actual API call)
  const fetchApiResults = async () => {
    try {
      // Replace with your actual backend API call
      const response = await fetch("https://api.example.com/your-endpoint");
      const data = await response.json();
      setApiResults(data.results); // Assuming the response has a "results" field

      // Save the API results to a database (e.g., Firebase, MongoDB, etc.)
      // Example: saveApiResultsToDatabase(data.results);
    } catch (error) {
      console.error("Error fetching API results:", error);
    }
  };

  // Fetch API results when component mounts (you can trigger this based on your logic)
  useEffect(() => {
    fetchApiResults();
  }, []);

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Assignment Description</h2>
      <p>{assignmentDescription}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">API Results</h2>
      <pre className="bg-gray-100 p-2 rounded-md">{apiResults || "Loading..."}</pre>

      <h2 className="text-xl font-semibold mt-6 mb-4">User Rating</h2>
      <div className="flex space-x-4">
        <button
          className={`px-2 py-1 rounded ${
            userRating === "like" ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setUserRating("like")}
        >
          Thumbs Up
        </button>
        <button
          className={`px-2 py-1 rounded ${
            userRating === "dislike" ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setUserRating("dislike")}
        >
          Thumbs Down
        </button>
      </div>
    </div>
  );
};

export default AdminAnalytics;
