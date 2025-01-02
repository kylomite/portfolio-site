import { useState, useEffect } from 'react'
import DarkModeToggle from './components/DarkModeToggle';
import "./index.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-primary text-text min-h-screen">
      <h1>test</h1>
      <div className="bg-secondary w-20 h-20"></div>
      <DarkModeToggle />
    </div>
  );
}

export default App
