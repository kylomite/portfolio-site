import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode, isDarkMode }: { setIsDarkMode: (value: boolean) => void, isDarkMode: boolean }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (path: string, id?: string) => {
    navigate(path);

    if (id) {
      setTimeout(() => {
        handleScroll(id);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
    className={`fixed top-0 left-0 right-0 z-10 p-2 pb-6 pr-6 transition-all duration-300 ${
      isDarkMode ? "bg-slate-900 bg-opacity-80" : "bg-slate-100 bg-opacity-80"
    }`}
    >
      <div className="flex justify-between items-center">
        {/* Hamburger Menu Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`block md:hidden text-2xl p-2 mt-4 focus:outline-none transition-all duration-300 ${
            isDarkMode ? "text-white" : "text-black"
          } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        >
          ☰
        </button>
    
        {/* Name Button */}
        <button
          onClick={() => handleNavigation("/", "home")}
          className="text-xl pr-8 mt-4 sm:text-2xl md:text-3xl font-bold mx-auto md:mx-4"
        >
          Kyle Delaney
        </button>
    
        {/* Dark Mode Toggle for Mobile */}
        <div className="absolute right-10 top-9 md:hidden">
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
    
        {/* Dark Mode Toggle for Desktop */}
        <div className="hidden md:block">
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-screen p-4 md:hidden ${
          isDarkMode ? "bg-slate-900 bg-opacity-80" : "bg-slate-100 bg-opacity-80"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl pl-2 my-4"
        >
          ×
        </button>
        <div className="flex flex-col space-y-4">
          <button onClick={() => handleNavigation("/", "home")}>Home</button>
          <button onClick={() => handleNavigation("/", "projects")}>Projects</button>
          <button onClick={() => handleNavigation("/", "skills")}>Skills</button>
          <button onClick={() => handleNavigation("/", "about")}>About Me</button>
          <button onClick={() => handleNavigation("/", "contact")}>Contact</button>
          <button onClick={() => navigate("/resume")}>Resume</button>
        </div>
      </div>
    
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end items-center w-full">
        <div className="flex space-x-6 lg:space-x-8">
          <button
            onClick={() => handleNavigation("/", "projects")}
            className="text-sm sm:text-base md:text-lg transform hover:scale-125 transition-all duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("/", "skills")}
            className="text-sm sm:text-base md:text-lg transform hover:scale-125 transition-all duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavigation("/", "about")}
            className="text-sm sm:text-base md:text-lg transform hover:scale-125 transition-all duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => handleNavigation("/", "contact")}
            className="text-sm sm:text-base md:text-lg transform hover:scale-125 transition-all duration-300"
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/resume")}
            className="text-sm sm:text-base md:text-lg transform hover:scale-125 transition-all duration-300"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;