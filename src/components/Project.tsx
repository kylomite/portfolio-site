import { useParams } from "react-router-dom";
import { Projects } from "../assets/Data";
import Skill from "./Skill";

function Project() {
  const { title } = useParams<{ title: string }>();

  const project = Projects.find((proj) => proj.Slug === title);

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  return (
    <div className="pt-32 bg-[rgba(209,213,219,0.4)] min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{project.Title}</h1>
      {project.Logo && (
        <img
          src={project.Logo}
          alt={project.Title}
          className="w-64 h-64 object-contain mb-4"
        />
      )}
      <p className="text-lg mb-4 ml-16 mr-16 text-center">{project.Description}</p>

      <section className="w-11/12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Media Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.Title} Media ${index + 1}`}
              className="w-full h-auto object-cover border-slate-900 border-2 shadow-lg"
            />
          ))}
        </div>
      </section>

      <section className="w-11/12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Technologies</h2>
        {Object.entries(project.Tech).map(([category, skills], index) => (
          <section
            key={index}
            className="mb-8 w-11/12 flex items-center border-b-2 border-slate-300 pb-4"
          >
            <div className="w-3/12 flex justify-center">
              <h3 className="text-lg font-bold">{category}</h3>
            </div>
            <div className="w-10/12 flex flex-wrap justify-end gap-4">
              {skills.map((skill, skillIndex) => (
                <Skill key={skillIndex} skillName={skill} />
              ))}
            </div>
          </section>
        ))}
      </section>

      <p className="m-4 text-sm">
        Team: {project.Team} | Time: {project.Time}
      </p>
    </div>
  );
}

export default Project;