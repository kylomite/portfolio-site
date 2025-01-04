import Skill from "./Skill";
import { Skills } from "../assets/Data";

function SkillsContainer() {
  return (
    <main className="mt-16 w-screen flex flex-col items-center bg-[rgba(209,213,219,0.4)]">
      <h1 className="mt-4 mb-6 text-2xl font-semibold">Skills</h1>
      {Object.entries(Skills[0]).map(([category, skills], index) => (
        <section
          key={index}
          className="mb-8 w-11/12 flex flex-row items-center border-b-2 border-slate-300 pb-4"
        >
          <div className="w-3/12 flex justify-center">
            <h2 className="text-md font-bold">{category}</h2>
          </div>

          <div className="w-10/12 flex flex-wrap justify-end gap-4">
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