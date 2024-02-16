import React, { useState } from 'react';
import FeedbackBox from './FeedbackBox'; // Import FeedbackBox component

const TeacherTemplate: React.FC = () => {
  const [chatGptResponse, setChatGptResponse] = useState<string | null>(null);

  // Function to handle submission and set chatGptResponse
  const handleSubmission = () => {
    // Your logic to handle submission and set chatGptResponse goes here
    setChatGptResponse('Your feedback goes here...');
  };

  return (
    <div>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Assignment description
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="assignDescription" type="text" placeholder="Description" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Amount of templates
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="amountTemplates" type="number" placeholder="Amount" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Keywords
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="amountTemplates" type="text" placeholder="Optional, separate by comma" />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button onClick={handleSubmission} className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Create Templates
            </button>
          </div>
          <div style={{ marginLeft: "1%" }} className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Regenerate Templates
            </button>
          </div>
        </div>
      </form>
      <br />
      <h2 style={{ marginLeft: '1%' }} className="text-2xl font-semibold mb-4">Templates</h2>
      {/* Render the FeedbackBox component and pass chatGptResponse as prop */}
      <FeedbackBox chatGptResponse={chatGptResponse} />
      <br />
      <div style={{ marginLeft: "1%" }} className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Accept Templates
            </button>
          </div>
    </div>
  );
}

export default TeacherTemplate;
