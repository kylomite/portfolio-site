import { useState, useEffect } from "react";
import Sun from '../assets/Images/sun.svg'
import Moon from '../assets/Images/moon.svg'

function DarkModeToggle({ setIsDarkMode }: { setIsDarkMode: (mode: boolean) => void }) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setIsDarkMode(isToggled);
  }, [isToggled, setIsDarkMode]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsToggled(!isToggled);
    }
  };

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isToggled}
      tabIndex={0}
      className={`flex w-10 h-6 rounded-full transition-all duration-200 cursor-pointer ${
        isToggled ? "bg-gray-300" : "bg-gray-700"
      }`}
    >
      <span
        className={`h-6 w-6 bg-white rounded-full shadow-2xl shadow-slate-50 flex items-center justify-center  transition-all duration-200 ${
          isToggled ? "ml-4" : ""
        }`}
      >
        {isToggled ? (
          <img src={Moon} alt="Moon icon" className="h-4 w-4" />
        ) : (
          <img src={Sun} alt="Sun icon" className="h-4 w-4" />
        )}
      </span>
    </div>
  );
}

export default DarkModeToggle;