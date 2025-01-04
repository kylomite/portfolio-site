import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode, isDarkMode }: { setIsDarkMode: (value: boolean) => void, isDarkMode: boolean }) {
  const navigate = useNavigate();

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
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 p-2 pb-6 pr-6 transition-all duration-300 ${
        isDarkMode ? "bg-slate-900 bg-opacity-80" : "bg-slate-100 bg-opacity-80"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <button
          onClick={() => handleNavigation("/", "home")}
          className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-0"
        >
          Kyle Delaney
        </button>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:flex md:space-x-6 lg:space-x-8 w-full md:w-auto">
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
          <div className="flex justify-center items-center">
            <DarkModeToggle setIsDarkMode={setIsDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;