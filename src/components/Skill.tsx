function Skill({ skillName }: { skillName: string }) {
    const colorVariables = [
        "--color1",
        "--color2",
        "--color3",
        "--color4",
        "--color5",
        "--color-interactive",
      ];

      const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const randomColor =
          colorVariables[Math.floor(Math.random() * colorVariables.length)];
        const rootStyles = getComputedStyle(document.documentElement);
        const colorValue = rootStyles.getPropertyValue(randomColor).trim();
        e.currentTarget.style.backgroundColor = `rgb(${colorValue})`;

        const colorWithAlpha = `rgba(${colorValue}, 0.4)`;

    e.currentTarget.style.backgroundColor = colorWithAlpha;
      };

      const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = ""; // Resets to default
      };
    return (
      <div 
      className="px-4 py-2 bg-white text-slate-900 drop-shadow-xl text-center font-medium border-2 border-slate-600 transition-all duration-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {skillName}
      </div>
    );
  }
  
  export default Skill;