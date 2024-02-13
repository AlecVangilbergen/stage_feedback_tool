import React from 'react';
import Navigation from './Navigation'; // Make sure to import your Navigation component

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Navigation />
      <div className="max-w-xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Feedback Tool with GenAI!</h1>
        <h2 className="text-xl font-semibold mb-2">Log in to start</h2>
        <p className="text-gray-600 mb-6">
          Use this tool as a teacher to generate templates of tasks which the tool then uses to compare student work to it and give feedback in the form of hints.
          Students can then rewrite their work based on this feedback until they're happy with it.
          They can then submit this work. As a teacher, you can see the feedback of the final product, as well as previous attempts by the student.
        </p>
        {/* Add more components or content here */}
      </div>
    </div>
  );
}

export default App;
