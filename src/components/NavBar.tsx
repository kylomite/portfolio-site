import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode }: { setIsDarkMode: (value: boolean) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-4 pb-6 bg-gradient-to-b from-gray-500 to-transparent">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl">Kyle Delaney</a>
        <div className="flex space-x-4">
          <a href="#projects" className="transform hover:scale-125 transition-all duration-300">
            Projects
          </a>
          <a href="#skills" className="transform hover:scale-125 transition-all duration-300">
            Skills
          </a>
          <a href="#about" className="transform hover:scale-125 transition-all duration-300">
            About Me
          </a>
          <a href="#contact" className="transform hover:scale-125 transition-all duration-300">
            Contact
          </a>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;