import React, { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="App">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" onChange={toggleDarkMode} />
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gray-900">
          <i class="fa-solid fa-moon ml-1 dark:text-white"></i>
          <i class="fa-solid ml-1 fa-sun"></i>
        </div>
      </label>
    </div>
  );
}

export default DarkMode;
