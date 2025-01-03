
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode }: { setIsDarkMode: (value: boolean) => void }) {

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ">Kyle Delaney</h1>
        <div className="flex space-x-4">
          <button >Projects</button>
          <button >Skills</button>
          <button >About Me</button>
          <button >Contact</button>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
    </nav>
  );
}
  
  export default Navbar;