import { useState, useEffect } from 'react'
import ColorBanner from './components/ColorBanner';
import "./index.scss"
import Navbar from './components/NavBar';
import DynamicText from './components/DynamicText';
import ProjectContainer from './components/ProjectContainer';
import SkillsContainer from './components/SkillsContainer';
import AboutMeContainer from './components/AboutMeContainer';
import ContactContainer from './components/Contact';


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
    <div className="bg-primary text-text min-h-screen ">
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <ColorBanner isDarkMode={isDarkMode} />
      </div>

      <div className="relative z-10">
        <Navbar setIsDarkMode={setIsDarkMode} />
        <div id="home">
          <DynamicText />
        </div>
        <div id="projects">
          <ProjectContainer />
        </div>
        <div id="skills">
          <SkillsContainer />
        </div>
        <div id="about">
          <AboutMeContainer />
        </div>
        <div id="contact">
          <ContactContainer />
        </div>
      </div>
    </div>
  );
}

export default App
