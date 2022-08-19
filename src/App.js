import UserPage from "./container/UserPage";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  
 
  return (
    <div className="App">
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
      <form>
      <label className="block mb-2 text-sm font-medium text-green-900 dark:text-gray-300">Enter your username:
        <input
          className="bg-gray-50 border border-gray-300 text-green-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text" 
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      </form>
         
      </div>
      <UserPage props={user} />
    </div>
  );
}

export default App;
