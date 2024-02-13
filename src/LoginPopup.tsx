import { useState } from 'react';

const LoginPopup = ({ toggle }: { toggle: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login logic (e.g., API calls, authentication)
    // Close the popup after successful login
    toggle();
  };
  
  return (
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input onChange={(e) => setUsername(e.target.value)} value={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
        <button onClick={toggle} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Close
        </button>
    
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2024 UCLL. All rights reserved.
  </p>
</div>
  );

};
export default LoginPopup;