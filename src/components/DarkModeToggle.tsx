import { useState, useEffect } from "react";

function DarkModeToggle({ setIsDarkMode }: { setIsDarkMode: (mode: boolean) => void }) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setIsDarkMode(isToggled);
  }, [isToggled, setIsDarkMode]);

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={`flex w-10 h-6 rounded-full transition-all duration-200 cursor-pointer ${
        isToggled ? "bg-gray-300" : "bg-gray-700"
      }`}
    >
      <span
        className={`h-6 w-6 bg-white rounded-full shadow-2xl shadow-slate-50 transition-all duration-200 ${
          isToggled ? "ml-4" : ""
        }`}
      />
    </div>
  );
}

export default DarkModeToggle;