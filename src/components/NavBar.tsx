
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode }: { setIsDarkMode: (value: boolean) => void }) {

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ">Kyle Delaney</h1>
        <div className="flex space-x-4">
          <button className="transform hover:scale-125 transition-all duration-300">Projects</button>
          <button className="transform hover:scale-125 transition-all duration-300">Skills</button>
          <button className="transform hover:scale-125 transition-all duration-300">About Me</button>
          <button className="transform hover:scale-125 transition-all duration-300">Contact</button>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </nav>
  );
}
  
  export default Navbar;