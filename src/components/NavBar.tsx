import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setIsDarkMode }: { setIsDarkMode: (mode: boolean) => void }) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl">Kyle Delaney</div>
          <div className="space-x-4">
            <button >Home</button>
            <button >About</button>
            <button >Contact</button>
          </div>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </nav>
    );
  }
  
  export default Navbar;