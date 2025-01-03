import { useState, useEffect } from "react";

function DarkModeToggle({ setIsDarkMode }: { setIsDarkMode: (mode: boolean) => void }) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setIsDarkMode(isToggled);
  }, [isToggled, setIsDarkMode]);

  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={`flex w-20 h-10 rounded-full transition-all duration-200 cursor-pointer ${
        isToggled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`h-10 w-10 bg-white rounded-full transition-all duration-200 ${
          isToggled ? "ml-10" : ""
        }`}
      />
    </div>
  );
}

export default DarkModeToggle;