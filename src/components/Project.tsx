import { useParams } from "react-router-dom";
import { Projects } from "../assets/Data";
import Skill from "./Skill";
import githubLogo from '../assets/Images/Octicons-mark-github.svg';
import URLImage from '../assets/Images/url.svg';


function Project({ isDarkMode }) {
  
  const svgColorFilter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
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
          className="w-64 h-64 sm:w-48 sm:h-48 lg:w-96 lg:h-96 object-contain mb-4"
        />
      )}

      <div className="mb-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">Repositories</h2>
        <div className="flex flex-col sm:flex-row gap-16 items-center">
          {project.Repos.FE && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">FE:</span>
              <a
                href={project.Repos.FE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform transform hover:scale-125 cursor-pointer"
                style={{ filter: svgColorFilter }}
              >
                <img
                  src={githubLogo}
                  alt="Frontend Repository"
                  className="w-8 h-8"
                />
              </a>
            </div>
          )}
          {project.Repos.BE && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">BE:</span>
              <a
                href={project.Repos.BE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform transform hover:scale-125 cursor-pointer"
                style={{ filter: svgColorFilter }}
              >
                <img
                  src={githubLogo}
                  alt="Backend Repository"
                  className="w-8 h-8"
                />
              </a>
            </div>
          )}
        </div>
        {project.Deployment && (
          <div className="mt-4 text-center">
            <a
              href={project.Deployment}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform transform hover:scale-125 inline-flex items-center gap-2"
              style={{ filter: svgColorFilter }}
            >
              <span className="text-lg font-semibold">Deployment</span>
              <img
                src={URLImage}
                alt="Image of a link"
                className="w-8 h-8"
              />
            </a>
          </div>
        )}
      </div>


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

      <section className="w-11/12 mt-4">
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