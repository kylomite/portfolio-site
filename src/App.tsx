import { useState, useEffect } from 'react'
import DarkModeToggle from './components/DarkModeToggle';
import ColorBanner from './components/ColorBanner';
import "./index.scss"
import Navbar from './components/NavBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-primary text-text min-h-screen">
      <Navbar setIsDarkMode={setIsDarkMode} />
      <ColorBanner isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App
