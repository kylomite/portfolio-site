import Skill from "./Skill";
import { Skills } from "../assets/Data";

function SkillsContainer() {
  return (
    <main className="mt-16 w-full max-w-screen-sm sm:max-w-full mx-auto px-4 sm:px-6 flex flex-col items-center bg-[rgba(209,213,219,0.4)] overflow-x-hidden">
      <h1 className="my-5 text-2xl font-semibold">Skills</h1>
      {Object.entries(Skills[0]).map(([category, skills], index) => (
        <section
          key={index}
          className="mb-8 w-full flex flex-col md:flex-row items-center border-b-2 border-slate-300 pb-4"
        >
          {/* Category aligned left */}
          <div className="w-full md:w-4 md:pl-10 flex justify-start md:justify-center mb-4 md:mb-0">
            <h2 className="text-md font-bold">{category}</h2>
          </div>

          {/* Skills aligned right */}
          <div className="w-full md:w-full flex flex-wrap justify-start md:justify-end gap-4">
            {skills.map((skill, skillIndex) => (
              <Skill key={skillIndex} skillName={skill} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default SkillsContainer;